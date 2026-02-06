-- Enable Row Level Security
alter table public.profiles enable row level security;
alter table public.settings enable row level security;
alter table public.workouts enable row level security;
alter table public.sync_log enable row level security;

-- Profiles
create policy "Profiles read own" on public.profiles
for select using (auth.uid() = user_id);

create policy "Profiles upsert own" on public.profiles
for insert with check (auth.uid() = user_id);

create policy "Profiles update own" on public.profiles
for update using (auth.uid() = user_id);

-- Settings
create policy "Settings read own" on public.settings
for select using (auth.uid() = user_id);

create policy "Settings upsert own" on public.settings
for insert with check (auth.uid() = user_id);

create policy "Settings update own" on public.settings
for update using (auth.uid() = user_id);

-- Workouts
create policy "Workouts read own" on public.workouts
for select using (auth.uid() = user_id);

create policy "Workouts upsert own" on public.workouts
for insert with check (auth.uid() = user_id);

create policy "Workouts update own" on public.workouts
for update using (auth.uid() = user_id);

-- Sync log
create policy "Sync log read own" on public.sync_log
for select using (auth.uid() = user_id);

create policy "Sync log insert own" on public.sync_log
for insert with check (auth.uid() = user_id);
