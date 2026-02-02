# SBS Tracker Roadmap

This document outlines planned features and enhancements for the SBS Workout Tracker, organized by priority.

## Priority 1: High Impact, Quick Wins

These features provide significant value and can be implemented relatively quickly.

### 1. Export/Backup Data
**Status:** Not started
**Effort:** Low
**Impact:** High
**Description:** Allow users to export their workout history and settings
- Export to CSV for spreadsheet analysis
- Export to JSON for backup/restore
- Import workout data from backup files
- Prevents data loss if browser storage is cleared

### 2. Plate Calculator
**Status:** Not started
**Effort:** Low
**Impact:** Medium-High
**Description:** Show which plates to load on the bar for each exercise
- Visual representation of plates needed (e.g., "2x20kg, 1x10kg, 1x2.5kg per side")
- Configurable available plates (2.5kg, 5kg, 10kg, 15kg, 20kg, 25kg)
- Works with standard 20kg barbell
- Helpful for gym efficiency

### 3. Rest Timer
**Status:** Not started
**Effort:** Low
**Impact:** Medium
**Description:** Built-in timer between sets
- Configurable rest periods (e.g., 3-5 minutes for main lifts)
- Visual and audio notifications
- Pause/resume functionality
- Keeps users on track during workouts

### 4. Personal Records Tracking
**Status:** Not started
**Effort:** Low-Medium
**Impact:** High
**Description:** Track and celebrate PRs
- Auto-detect when you hit a new PR (highest weight for a given rep range)
- PR history for each lift
- Badge/notification when PR is achieved
- Motivating visual feedback

## Priority 2: Strategic Features

These features require more effort but provide significant value.

### 5. SBS Hypertrophy Template
**Status:** Not started
**Effort:** Medium-High
**Impact:** High
**Description:** Add support for the SBS Hypertrophy program
- Full hypertrophy template data (all weeks, all days)
- Program selector in setup (choose between Strength and Hypertrophy)
- Different progression schemes for hypertrophy focus
- Allows users to switch between templates or run both

### 6. Exercise Notes & Form Cues
**Status:** Not started
**Effort:** Medium
**Impact:** Medium-High
**Description:** Add notes and form reminders for each exercise
- Per-workout notes (e.g., "felt heavy today", "hip pain")
- Form cues library (e.g., "chest up", "break at knees")
- Attach videos/images to exercises
- Historical context for performance trends

### 7. Advanced Analytics Dashboard
**Status:** Partially complete (basic Progress tab exists)
**Effort:** Medium
**Impact:** High
**Description:** Expand analytics with more detailed insights
- Line charts for weight progression over time per lift
- Volume trends (weekly, monthly)
- AMRAP performance trends (hitting/missing targets)
- Fatigue indicators (performance drop-offs)
- Training consistency metrics (adherence rate)
- Projected 1RM based on training max progressions

### 8. Cloud Sync & Multi-Device Support
**Status:** Not started
**Effort:** High
**Impact:** High
**Description:** Sync data across devices
- Optional cloud storage (Firebase, Supabase, or similar)
- Automatic sync when online
- Conflict resolution for offline edits
- Share data between phone and desktop
- Requires backend infrastructure

### 9. Exercise Substitutions
**Status:** Not started
**Effort:** Medium
**Impact:** Medium
**Description:** Allow users to substitute exercises
- Swap exercises when equipment unavailable (e.g., front squat → goblet squat)
- Maintain progression tracking for substitutions
- Suggest similar exercises
- Preserve workout structure

## Priority 3: Nice-to-Have Enhancements

These features add polish but are lower priority.

### 10. Custom Programs & Templates
**Status:** Not started
**Effort:** High
**Impact:** Medium
**Description:** Allow users to create custom programs
- Program builder interface
- Save and share custom templates
- Import community templates
- Not SBS-specific, general purpose tracker

### 11. Deload Week Intelligence
**Status:** Not started
**Effort:** Low
**Impact:** Low-Medium
**Description:** Smart deload recommendations
- Suggest unplanned deload based on performance trends
- Fatigue monitoring (consecutive missed targets)
- Recovery suggestions

### 12. Training Partner Features
**Status:** Not started
**Effort:** High
**Impact:** Low-Medium
**Description:** Social and accountability features
- Share workouts with training partners
- Leaderboards for motivation
- Progress comparisons
- Requires user accounts and backend

### 13. Warmup Calculator
**Status:** Not started
**Effort:** Low
**Impact:** Low
**Description:** Generate warmup sets automatically
- Progressive warmup sets leading to working weight
- Standard warmup protocols (e.g., bar → 40% → 60% → 80% → work weight)
- Configurable warmup scheme

### 14. Native Mobile Apps
**Status:** Not started (PWA exists)
**Effort:** Very High
**Impact:** Medium
**Description:** iOS and Android native apps
- Better performance than PWA
- Native notifications
- Offline-first architecture
- App store distribution
- Significant development effort

### 15. Exercise Video Library
**Status:** Not started
**Effort:** Medium-High
**Impact:** Low
**Description:** Built-in exercise demonstrations
- Embed YouTube videos for form guidance
- Links to trusted resources (Stronger By Science, etc.)
- Form check tips per exercise

## Priority 4: Advanced/Future Ideas

Long-term possibilities for consideration.

### 16. AI Form Check
**Status:** Not started
**Effort:** Very High
**Impact:** Medium
**Description:** Use device camera for form analysis
- Pose detection during lifts
- Real-time form feedback
- Requires ML/AI integration
- Privacy considerations

### 17. RPE & RIR Tracking
**Status:** Not started
**Effort:** Low-Medium
**Impact:** Low-Medium
**Description:** Track Rate of Perceived Exertion
- Input RPE/RIR for each AMRAP set
- Auto-adjust recommendations based on RPE trends
- Better autoregulation

### 18. Nutrition Integration
**Status:** Not started
**Effort:** High
**Impact:** Low
**Description:** Track nutrition alongside training
- Calorie/macro tracking
- Weight tracking with trend analysis
- Correlate nutrition with performance

### 19. Injury Prevention & Tracking
**Status:** Not started
**Effort:** Medium
**Impact:** Medium
**Description:** Track niggles and injuries
- Pain/discomfort logging
- Exercise modifications for injuries
- Recovery timeline tracking
- Prevent training through injuries

### 20. Community & Marketplace
**Status:** Not started
**Effort:** Very High
**Impact:** Low-Medium
**Description:** Community-driven features
- Share custom programs
- Template marketplace
- Discussion forums
- Coaching integrations

---

## Implementation Notes

### Current Completed Features
- ✅ Full 20-week SBS 2x/3x/4x/5x program support
- ✅ AMRAP tracking and auto-progression
- ✅ Workout history
- ✅ Basic progress analytics (volume, estimated 1RM)
- ✅ PWA support for mobile
- ✅ Offline functionality
- ✅ 1RM settings and adjustments
- ✅ Week jumping
- ✅ Auxiliary exercise customization

### Next Steps
Start with Priority 1 items for maximum user value with minimal effort:
1. **Export/Backup** - Critical for data safety
2. **Plate Calculator** - Highly requested, easy to implement
3. **Rest Timer** - Improves workout flow
4. **Personal Records** - Motivating feature

Then move to Priority 2 strategic features:
5. **SBS Hypertrophy Template** - Expands program options
6. **Enhanced Analytics** - Build on existing Progress tab
7. **Exercise Notes** - Adds context to workouts

---

## Feedback & Suggestions

Have ideas for new features? Create an issue on GitHub or reach out with suggestions!
