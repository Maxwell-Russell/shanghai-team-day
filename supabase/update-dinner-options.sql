-- Update dinner choices after moving karting to Zhongxing Road and boardgames to Wujiaochang.
-- Existing rows remain valid; old dinner IDs are retained in the constraint for compatibility.
begin;

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

commit;
