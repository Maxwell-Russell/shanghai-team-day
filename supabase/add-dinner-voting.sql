-- Add boardgames and a dinner ballot without changing existing votes.
begin;

alter table public.team_votes
  add column if not exists dinner_id text;

alter table public.team_votes
  drop constraint if exists team_votes_option_id_check;
alter table public.team_votes
  add constraint team_votes_option_id_check
  check (option_id in ('sports', 'kart', 'escape', 'park', 'boardgames'));

alter table public.team_votes
  drop constraint if exists team_votes_dinner_option_check;
alter table public.team_votes
  add constraint team_votes_dinner_option_check check (
    dinner_id is null or
    (option_id in ('sports', 'escape') and dinner_id in ('niunew', 'bluefrog_crystal')) or
    (option_id = 'kart' and dinner_id in ('grandma_joycity', 'dashu_joycity', 'tori_joycity', 'bluefrog_jinqiao', 'marriott_buffet', 'marriott_chinese')) or
    (option_id = 'park' and dinner_id in ('sheraton', 'latina_lujiazui', 'bluefrog_96')) or
    (option_id = 'boardgames' and dinner_id in ('niunew_wujiaochang', 'white_university', 'bluefrog_wujiaochang', 'niunew', 'latina_tongren', 'bluefrog_crystal'))
  );

-- These privileges still require the existing own-row RLS policies.
grant select, insert, update on table public.team_votes to authenticated;

create or replace function public.get_team_dinner_vote_counts()
returns table (option_id text, dinner_id text, vote_count bigint)
language sql
security definer
set search_path = public
as $$
  select option_id, dinner_id, count(*)::bigint
  from public.team_votes
  where dinner_id is not null
  group by option_id, dinner_id
  order by option_id, dinner_id;
$$;

revoke all on function public.get_team_dinner_vote_counts() from public;
grant execute on function public.get_team_dinner_vote_counts() to anon, authenticated;

commit;
