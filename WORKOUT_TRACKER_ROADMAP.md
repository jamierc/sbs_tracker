# Workout Tracker Improvement Roadmap

This roadmap is based on a review of the current app structure (single-page PWA with `index.html`, `sw.js`, `program-data.js`, `hypertrophy-program-data.js`, and `localStorage` persistence) and focuses on pragmatic improvements across UI/UX and backend/data.

## Review Summary

**Strengths**
- Offline-first UX with service worker caching (`sw.js`).
- Rich feature set already: hypertrophy + strength, plate calculator, rest timer, PR tracking, Hevy export (`index.html`).
- Thoughtful state migrations and feature flags in JS (`index.html`).

**Gaps / Risks**
- Architecture: all UI, logic, state, and rendering in one massive file (`index.html`).
- Data durability: `localStorage` only; no export/import by default and no sync.
- Testing/regression safety: no automated tests or linting workflow found.
- Hevy integration: client-side API key storage and direct calls can fail due to CORS.
- Performance: large JS payload and heavy DOM manipulation without modularization or lazy loading.

---

## UI/UX Roadmap (Frontend Track)

### Phase 0 (1-2 days): Stability & Clarity
1. Modularize UI into sections even if staying on vanilla JS.
   - Split `index.html` into `app.js`, `ui.js`, `styles.css`, and `data/`.
2. Add a global “data status” indicator near the header.
3. Improve empty states and onboarding hints.

### Phase 1 (1-2 weeks): Navigation & Workflow UX
1. Redesign navigation to reduce context switching (bottom nav).
2. Add “Quick Actions” on workout cards.
3. Faster data entry (steppers, presets, “complete last set”).

### Phase 2 (2-4 weeks): Visual Design System
1. Normalize spacing and typography with a single system.
2. Build reusable component palette (cards, pills, buttons, badges).
3. Consistent motion system (staggered entry, progress transitions, light haptics).

### Phase 3 (4-8 weeks): Delight & Retention
1. Streaks, weekly summaries, and PR share cards.
2. Session recap (volume, PRs, total time, notes).
3. Lightweight exercise guidance overlay (toggleable).

---

## Backend/Data Roadmap (Backend Track)

### Phase 0 (1-2 days): Data Safety
1. Built-in export/import (JSON + CSV) in Settings.
2. `localStorage` integrity checks and versioned migrations with user-visible warnings.

### Phase 1 (1-2 weeks): Local Data Upgrade
1. Move persistent data to IndexedDB for scale and future sync readiness.
2. Create a single data layer module (reads/writes/migrations decoupled from UI).

### Phase 2 (2-4 weeks): Sync-Ready Backend Foundation
1. Introduce a simple backend with auth and a `user + workouts` API.
2. Use a BaaS for speed (Supabase/Firebase) and add `users`, `workouts`, `settings`.
3. Conflict resolution rules (last-write-wins or per-field merge).

### Phase 3 (4-8 weeks): Sync + Observability
1. Offline-first sync queue and reconciliation on reconnect.
2. Audit logging for edits and completion events.
3. Optional telemetry (opt-in) to learn drop-off.

### Phase 4 (Hevy Integration Hardening)
1. Proxy Hevy API calls through a small backend to avoid CORS and protect keys.
2. Token storage server-side and automatic sync.
3. Export status and failure recovery UI.

---

## Suggested Sequencing
1. Phase 0 UI + Phase 0 Backend (quick wins and data safety).
2. Phase 1 UI + Phase 1 Backend (structural refactor + storage upgrade).
3. Phase 2 Backend in parallel with Phase 2 UI.
4. Phase 3+ as the app scales.
