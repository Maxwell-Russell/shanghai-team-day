-- Run this after the table and policies from the initial setup.
-- Anonymous users use the authenticated role after signInAnonymously().
grant select, insert, update on table public.team_votes to authenticated;

drop policy if exists "users can select own vote" on public.team_votes;
create policy "users can select own vote"
on public.team_votes
for select
to authenticated
using (auth.uid() = user_id);

-- Keep the RPC callable from the public website. It only returns aggregate counts.
grant execute on function public.get_team_vote_counts() to anon, authenticated;
