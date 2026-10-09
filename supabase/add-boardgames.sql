begin;

alter table public.team_votes
drop constraint if exists team_votes_option_id_check;

alter table public.team_votes
add constraint team_votes_option_id_check
check (option_id in ('sports', 'kart', 'escape', 'park', 'boardgames'));

commit;
