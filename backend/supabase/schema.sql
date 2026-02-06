-- SBS Tracker Supabase schema

create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  display_name text,
  units text not null default 'kg'
);

create table if not exists public.settings (
  user_id uuid primary key references auth.users(id) on delete cascade,
  updated_at timestamptz not null default now(),
  program_type text not null default 'strength',
  program_variant text not null default '3x',
  current_week integer not null default 1,
  current_day integer not null default 1,
  one_rep_maxes jsonb not null default '{}'::jsonb,
  auxiliary_exercises jsonb not null default '{}'::jsonb,
  plate_calculator jsonb not null default '{}'::jsonb,
  rest_timer jsonb not null default '{}'::jsonb,
  personal_records jsonb not null default '{}'::jsonb
);

create table if not exists public.workouts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  program_type text not null,
  program_variant text not null,
  week integer not null,
  day integer not null,
  exercise_name text not null,
  payload jsonb not null
);

create unique index if not exists workouts_unique_key
  on public.workouts (user_id, program_type, program_variant, week, day, exercise_name);

create index if not exists workouts_user_week_idx
  on public.workouts (user_id, week, day);

create table if not exists public.sync_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  event_type text not null,
  payload jsonb not null
);

-- Update timestamps
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger profiles_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

create trigger settings_updated_at
before update on public.settings
for each row execute function public.set_updated_at();

create trigger workouts_updated_at
before update on public.workouts
for each row execute function public.set_updated_at();
