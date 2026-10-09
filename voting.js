(() => {
  'use strict';

  const grid = document.getElementById('votegrid');
  const dinnerGrid = document.getElementById('dinnerVoteGrid');
  const result = document.getElementById('voteResult');
  const updated = document.getElementById('voteUpdated');
  const activityTotal = document.getElementById('activityVoteTotal');
  const dinnerTotal = document.getElementById('dinnerVoteTotal');
  const dinnerTitle = document.getElementById('dinnerVoteTitle');
  const setupWarning = document.getElementById('voteSetupWarning');
  const submit = document.getElementById('submitVote');
  const refresh = document.getElementById('refreshVotes');
  let user = null;
  let selectedActivity = '';
  let selectedDinner = '';
  let savedActivity = '';
  let savedDinner = '';
  let renderedActivity = null;
  let selectionTouched = false;
  let busy = false;
  let connecting = false;
  let activityCounts = null;
  let dinnerCounts = null;
  let countsRequest = null;
  let schemaReady = null;

  const selectedPlan = () => plans.find(plan => plan.id === selectedActivity);
  const countValue = value => {
    const count = Number(value);
    if (!Number.isSafeInteger(count) || count < 0) throw new Error('Invalid vote counts');
    return count;
  };

  grid.innerHTML = plans.map(plan => `<button type="button" data-vote="${plan.id}" aria-pressed="false">
    <strong>${plan.n} ${plan.title}</strong><span>${plan.fit}</span>
    <span class="vote-count">读取中…</span><progress value="0" max="100" aria-hidden="true"></progress>
  </button>`).join('');

  function message(text, isError = false) {
    result.textContent = text;
    result.classList.toggle('error', isError);
  }

  function renderDinners() {
    const plan = selectedPlan();
    if (renderedActivity !== selectedActivity) {
      renderedActivity = selectedActivity;
      dinnerTitle.textContent = plan ? `02 / 晚餐：${plan.title}` : '02 / 晚餐';
      dinnerGrid.innerHTML = plan ? dinnerOptions(plan).map(option => `<button type="button" data-dinner="${option.id}" aria-pressed="false">
        <strong>${option.short}</strong><span class="dinner-kind">${option.type}</span>
        <span class="dinner-budget">餐费上限 ¥${plan.dinnerBudget}/人</span>
        <span class="vote-count">读取中…</span><progress value="0" max="100" aria-hidden="true"></progress>
      </button>`).join('') : '<p class="dinner-empty">请选择想参加的活动</p>';
    }
    if (!plan) { dinnerTotal.textContent = '请选择活动'; return; }
    const counts = dinnerCounts?.[plan.id];
    const total = counts ? Object.values(counts).reduce((sum, count) => sum + count, 0) : 0;
    for (const button of dinnerGrid.children) {
      button.disabled = busy;
      button.setAttribute('aria-pressed', String(button.dataset.dinner === selectedDinner));
      const count = counts?.[button.dataset.dinner] || 0;
      const percentage = total ? Math.round(count / total * 100) : 0;
      button.querySelector('.vote-count').textContent = counts ? `${count} 票 · ${percentage}%` : schemaReady === false ? '待开放' : '暂不可用';
      button.querySelector('progress').value = percentage;
    }
    const pending = activityCounts && counts ? Math.max(0, activityCounts[plan.id] - total) : 0;
    dinnerTotal.textContent = counts ? `${plan.title}下共 ${total} 票${pending ? ` · ${pending} 人尚未选晚餐` : ''}` : schemaReady === false ? '晚餐投票待开放' : '晚餐统计暂不可用';
  }

  function render() {
    const total = activityCounts ? Object.values(activityCounts).reduce((sum, count) => sum + count, 0) : 0;
    for (const button of grid.children) {
      button.setAttribute('aria-pressed', String(button.dataset.vote === selectedActivity));
      button.disabled = busy;
      if (activityCounts) {
        const count = activityCounts[button.dataset.vote] || 0;
        const percentage = total ? Math.round(count / total * 100) : 0;
        button.querySelector('.vote-count').textContent = `${count} 票 · ${percentage}%`;
        button.querySelector('progress').value = percentage;
      }
    }
    renderDinners();
    const complete = selectedActivity && selectedDinner;
    const unchanged = selectedActivity === savedActivity && selectedDinner === savedDinner;
    submit.disabled = busy || connecting || !user || !complete || unchanged || schemaReady !== true;
    submit.textContent = busy ? '正在提交…' : unchanged && complete ? '已投票' : savedActivity ? '修改活动和晚餐投票' : '提交活动和晚餐投票';
    refresh.disabled = busy || connecting;
    refresh.textContent = user ? '刷新统计' : '重新连接';
    activityTotal.textContent = activityCounts ? `共 ${total} 票` : '活动统计暂不可用';
  }

  function savedMessage() {
    const plan = plans.find(item => item.id === savedActivity);
    const dinner = plan && dinnerOptions(plan).find(item => item.id === savedDinner);
    if (plan && dinner) message(`你的匿名选择：${plan.title} · ${dinner.short}`);
    else if (plan) message(`已保留活动选择：${plan.title}，请选择晚餐`);
    else message('尚未投票');
  }

  async function fetchWithTimeout(url, options = {}) {
    const controller = new AbortController();
    const forwardAbort = () => controller.abort();
    if (options.signal?.aborted) forwardAbort();
    else options.signal?.addEventListener('abort', forwardAbort, { once: true });
    const timeout = setTimeout(() => controller.abort(), 15000);
    try { return await fetch(url, { ...options, signal: controller.signal }); }
    finally { clearTimeout(timeout); options.signal?.removeEventListener('abort', forwardAbort); }
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
      const responses = await Promise.allSettled([
        client.rpc('get_team_vote_counts'), client.rpc('get_team_dinner_vote_counts')
      ]);
      let failed = false;
      for (let index = 0; index < responses.length; index++) {
        const response = responses[index];
        try {
          if (response.status === 'rejected') throw response.reason;
          if (response.value.error) throw response.value.error;
          if (index === 0) {
            const next = Object.fromEntries(plans.map(plan => [plan.id, 0]));
            for (const row of response.value.data || []) if (Object.hasOwn(next, row.option_id)) next[row.option_id] = countValue(row.vote_count);
            activityCounts = next;
          } else {
            const next = Object.fromEntries(plans.map(plan => [plan.id, Object.fromEntries(plan.dinners.map(option => [option.id, 0]))]));
            for (const row of response.value.data || []) {
              if (next[row.option_id] && Object.hasOwn(next[row.option_id], row.dinner_id)) next[row.option_id][row.dinner_id] = countValue(row.vote_count);
            }
            dinnerCounts = next;
            schemaReady = true;
            setupWarning.hidden = true;
          }
        } catch (error) {
          failed = true;
          if (index === 1 && ['PGRST202', 'PGRST204', '42883', '42703'].includes(error?.code)) {
            schemaReady = false;
            setupWarning.hidden = false;
            setupWarning.textContent = '晚餐投票正在准备中，已有活动票已保留。';
          }
        }
      }
      render();
      const total = Object.values(activityCounts || {}).reduce((sum, count) => sum + count, 0);
      const time = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      updated.textContent = failed ? '部分统计暂时无法更新，已有结果已保留。' : `活动共 ${total} 票 · 更新于 ${time}`;
    })().catch(() => { updated.textContent = '统计暂时不可用，请稍后刷新。'; }).finally(() => { countsRequest = null; });
    return countsRequest;
  }

  async function connect() {
    if (connecting) return;
    connecting = true; user = null; render(); message('正在连接投票…');
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
      // SELECT * also recovers old activity-only votes before the dinner migration.
      const { data, error } = await client.from('team_votes').select('*').eq('user_id', identity.id).maybeSingle();
      if (error) throw error;
      user = identity;
      const plan = plans.find(item => item.id === data?.option_id);
      savedActivity = plan?.id || '';
      savedDinner = plan?.dinners.some(item => item.id === data?.dinner_id) ? data.dinner_id : '';
      if (!selectionTouched) { selectedActivity = savedActivity; selectedDinner = savedDinner; }
      savedMessage();
    } catch (error) {
      message(error?.code === '42501' ? '投票服务尚未完成配置，请稍后重试。' : '暂时无法连接投票，请重试。', true);
    } finally { connecting = false; render(); }
  }

  grid.addEventListener('click', event => {
    const button = event.target.closest('button[data-vote]');
    if (!button || busy) return;
    if (selectedActivity !== button.dataset.vote) {
      selectedActivity = button.dataset.vote;
      selectedDinner = selectedActivity === savedActivity ? savedDinner : '';
    }
    selectionTouched = true;
    window.dispatchEvent(new CustomEvent('vote-activity-selected', { detail: selectedActivity }));
    render();
    if (user) message(`已选活动：${selectedPlan().title}${selectedDinner ? '' : '，请选择晚餐'}`);
  });

  dinnerGrid.addEventListener('click', event => {
    const button = event.target.closest('button[data-dinner]');
    if (!button || busy) return;
    selectedDinner = button.dataset.dinner;
    selectionTouched = true;
    render();
    if (user) message(`待提交：${selectedPlan().title} · ${restaurants[selectedDinner].short}`);
  });

  submit.addEventListener('click', async () => {
    if (submit.disabled) return;
    const activity = selectedActivity;
    const dinner = selectedDinner;
    busy = true; render(); message('正在提交活动和晚餐投票…');
    try {
      const { error } = await client.from('team_votes').upsert(
        { user_id: user.id, option_id: activity, dinner_id: dinner, updated_at: new Date().toISOString() },
        { onConflict: 'user_id' }
      );
      if (error) throw error;
      savedActivity = activity; savedDinner = dinner;
      message(`投票已保存：${selectedPlan().title} · ${restaurants[dinner].short}`);
      await loadCounts();
    } catch (error) {
      message(error?.code === '42501' ? '暂时无法保存投票，请稍后重试。' : '提交未确认，请重试；重试不会增加重复票。', true);
    } finally { busy = false; render(); }
  });

  refresh.addEventListener('click', async () => {
    refresh.disabled = true; refresh.textContent = '正在刷新…';
    await Promise.allSettled([user ? Promise.resolve() : connect(), loadCounts()]);
    render();
  });

  function refreshInBackground() { if (!document.hidden && !busy) loadCounts(); }
  connect();
  loadCounts();
  setInterval(refreshInBackground, 15000);
  document.addEventListener('visibilitychange', refreshInBackground);
  window.addEventListener('online', () => { if (!user) connect(); refreshInBackground(); });
})();
