# Supabase anonymous voting setup

The page uses Supabase anonymous authentication. In the Supabase dashboard:

1. Open **Authentication -> Sign In / Providers** and enable **Allow anonymous sign-ins**.
2. Open **SQL Editor** and run [`supabase/setup.sql`](supabase/setup.sql).
3. Keep the existing `team_votes` table, RLS policies, and `get_team_vote_counts()` function from the initial SQL.
4. Run [`supabase/add-dinner-voting.sql`](supabase/add-dinner-voting.sql) once to add the boardgames option, dinner choices, and the dinner aggregate function. It is additive: existing activity votes stay in place.
5. If you already ran the original dinner SQL, run [`supabase/update-dinner-options.sql`](supabase/update-dinner-options.sql) once. It updates only the dinner-option constraint, keeps old rows valid, and adds the new nearby dinner choices for karting and boardgames.

The website only contains the Supabase project URL and publishable key. Do not put a `service_role` or secret key in this repository.

Anonymous users are assigned a Supabase user ID, persisted in their browser. One activity and one dinner choice are stored with that ID, so the same browser can submit them together and update them later, even after a page reload. Each authenticated user can read and change only their own vote. The public statistics endpoints return only aggregate counts and the page refreshes them every 15 seconds while visible.

This prevents duplicate votes for one anonymous browser identity. Clearing site data, using incognito, or changing browsers/devices creates another identity; it does not enforce one vote per real person.

The page is static HTML, so the supplied `NEXT_PUBLIC_*` values are used directly in `voting.js`; no Next.js environment file is needed. Supabase JS 2.117.3 is vendored in `vendor/supabase.js` with its MIT license to avoid a runtime CDN dependency.
