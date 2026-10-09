(() => {
  'use strict';

  const grid = document.getElementById('votegrid');
  const result = document.getElementById('voteResult');
  const updated = document.getElementById('voteUpdated');
  const submit = document.getElementById('submitVote');
  const refresh = document.getElementById('refreshVotes');
  let user = null;
  let selected = '';
  let saved = '';
  let selectionTouched = false;
  let busy = false;
  let connecting = false;
  let counts = null;
  let countsRequest = null;

  grid.innerHTML = plans.map(plan => `<button type="button" data-vote="${plan.id}" aria-pressed="false">
    <strong>${plan.n} ${plan.title}</strong><span>${plan.fit}</span>
    <span class="vote-count">读取中…</span><progress value="0" max="100" aria-hidden="true"></progress>
  </button>`).join('');

  function message(text, isError = false) {
    result.textContent = text;
    result.classList.toggle('error', isError);
  }

  function render() {
    const total = counts ? Object.values(counts).reduce((sum, count) => sum + count, 0) : 0;
    for (const button of grid.children) {
      button.setAttribute('aria-pressed', String(button.dataset.vote === selected));
      button.disabled = busy;
      if (counts) {
        const count = counts[button.dataset.vote] || 0;
        const percentage = total ? Math.round(count / total * 100) : 0;
        button.querySelector('.vote-count').textContent = `${count} 票 · ${percentage}%`;
        button.querySelector('progress').value = percentage;
      }
    }
    submit.disabled = busy || connecting || !user || !selected || selected === saved;
    submit.textContent = busy ? '正在提交…' : selected && selected === saved ? '已投票' : saved ? '修改投票' : '提交匿名投票';
    refresh.disabled = busy || connecting;
    refresh.textContent = user ? '刷新统计' : '重新连接';
  }

  function savedMessage() {
    const plan = plans.find(item => item.id === saved);
    message(plan ? `你的匿名投票：${plan.n} ${plan.title}` : '尚未投票');
  }

  async function fetchWithTimeout(url, options = {}) {
    const controller = new AbortController();
    const forwardAbort = () => controller.abort();
    if (options.signal?.aborted) forwardAbort();
    else options.signal?.addEventListener('abort', forwardAbort, { once: true });
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      return await fetch(url, { ...options, signal: controller.signal });
    } finally {
      clearTimeout(timeout);
      options.signal?.removeEventListener('abort', forwardAbort);
    }
  }

  if (!window.supabase) {
    message('投票服务加载失败，请刷新页面重试。', true);
    updated.textContent = '统计暂时不可用';
    refresh.disabled = false;
    refresh.textContent = '重新加载';
    refresh.addEventListener('click', () => location.reload());
    return;
  }

  const client = window.supabase.createClient(
    'https://uqogxeveeikhmiuplnsb.supabase.co',
    'sb_publishable_ueE5iSOzLI7BAvOK2iaYSg_rNtAjq6m',
    { global: { fetch: fetchWithTimeout } }
  );

  function loadCounts() {
    if (countsRequest) return countsRequest;
    countsRequest = (async () => {
      try {
        const { data, error } = await client.rpc('get_team_vote_counts');
        if (error) throw error;
        const nextCounts = Object.fromEntries(plans.map(plan => [plan.id, 0]));
        for (const row of data || []) {
          if (Object.hasOwn(nextCounts, row.option_id)) {
            const count = Number(row.vote_count);
            if (!Number.isSafeInteger(count) || count < 0) throw new Error('Invalid vote counts');
            nextCounts[row.option_id] = count;
          }
        }
        counts = nextCounts;
        render();
        const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
        const time = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        updated.textContent = `共 ${total} 票 · 更新于 ${time}`;
      } catch (error) {
        updated.textContent = counts ? '统计暂时无法更新，当前为上次结果。' : '统计暂时不可用，正在等待重试。';
        if (!counts) {
          for (const button of grid.children) button.querySelector('.vote-count').textContent = '暂不可用';
        }
        throw error;
      } finally {
        countsRequest = null;
      }
    })();
    return countsRequest;
  }

  async function connect() {
    if (connecting) return;
    connecting = true;
    user = null;
    render();
    message('正在连接投票…');
    try {
      const { data: session, error: sessionError } = await client.auth.getSession();
      if (sessionError) throw sessionError;
      let identity = session.session?.user;
      if (!identity) {
        const { data, error } = await client.auth.signInAnonymously();
        if (error) throw error;
        identity = data.user;
      }
      if (!identity) throw new Error('Missing anonymous user');
      const { data, error } = await client.from('team_votes').select('option_id').eq('user_id', identity.id).maybeSingle();
      if (error) throw error;
      user = identity;
      saved = plans.some(plan => plan.id === data?.option_id) ? data.option_id : '';
      if (!selectionTouched) selected = saved;
      savedMessage();
    } catch (error) {
      message(error.code === '42501' ? '投票服务尚未完成配置，请稍后重试。' : '暂时无法连接投票，请重试。', true);
    } finally {
      connecting = false;
      render();
    }
  }

  grid.addEventListener('click', event => {
    const button = event.target.closest('button[data-vote]');
    if (!button || busy) return;
    selected = button.dataset.vote;
    selectionTouched = true;
    render();
    if (!user) return;
    if (selected === saved) savedMessage();
    else message(`待提交：${plans.find(plan => plan.id === selected).title}`);
  });

  submit.addEventListener('click', async () => {
    if (busy || !user || !selected || selected === saved) return;
    const option = selected;
    busy = true;
    render();
    message('正在提交匿名投票…');
    try {
      const { error } = await client.from('team_votes').upsert(
        { user_id: user.id, option_id: option, updated_at: new Date().toISOString() },
        { onConflict: 'user_id' }
      );
      if (error) throw error;
      saved = option;
      message(`投票已保存：${plans.find(plan => plan.id === saved).title}`);
      // A statistics outage must not report a successfully saved vote as a failed submission.
      await loadCounts().catch(() => {});
    } catch (error) {
      message(error.code === '42501' ? '暂时无法保存投票，请稍后重试。' : '提交未确认，请重试；重试不会增加重复票。', true);
    } finally {
      busy = false;
      render();
    }
  });

  refresh.addEventListener('click', async () => {
    refresh.disabled = true;
    refresh.textContent = '正在刷新…';
    await Promise.allSettled([user ? Promise.resolve() : connect(), loadCounts()]);
    render();
  });

  function refreshInBackground() {
    if (!document.hidden && !busy) loadCounts().catch(() => {});
  }

  connect();
  loadCounts().catch(() => {});
  setInterval(refreshInBackground, 15000);
  document.addEventListener('visibilitychange', refreshInBackground);
  window.addEventListener('online', () => {
    if (!user) connect();
    refreshInBackground();
  });
})();
