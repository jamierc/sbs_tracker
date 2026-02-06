# Supabase Backend Foundation

This folder defines the initial backend schema for multi-device sync.

## Contents
- `schema.sql`: Tables, indexes, and core structure.
- `policies.sql`: RLS policies for authenticated access.

## How To Apply (Supabase SQL Editor)
1. Create a new Supabase project.
2. In the SQL editor, run `schema.sql`.
3. Then run `policies.sql`.

## Data Model Summary
- `profiles`: per-user metadata (1 row per user).
- `settings`: user program settings (1 row per user).
- `workouts`: normalized workout entries per user/week/day/exercise.
- `sync_log`: optional auditing of sync events for troubleshooting.

## Notes
- All tables use `user_id` linked to `auth.users.id`.
- Row Level Security (RLS) is enabled on all tables.
- Policies allow each user to read/write only their own data.
- Keep `settings` as the canonical store for high-level app settings.
- `workouts` is append/replace by `(user_id, week, day, exercise_name, program_type, program_variant)`.
