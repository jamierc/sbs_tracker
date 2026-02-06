# Session Notes - Progress Tracking & Hypertrophy Planning

**Date:** 2026-01-20
**Status:** Paused - Ready to resume

## What We Completed This Session

### 1. Progress Tab Implementation ✅
**Committed to GitHub:** Commit `e1a59e2`

Added comprehensive progress tracking features to `index.html`:
- New "Progress" navigation tab
- Statistics dashboard showing:
  - Total volume lifted (kg)
  - Workouts completed
  - Weeks completed
  - Average volume per week
- Visual bar chart for weekly volume trends
- Estimated 1RM progress tracking using Epley formula
- Performance breakdown by lift (average weight, total volume, AMRAPs completed)

**Key Functions Added:**
- `renderProgress()` - Main progress tab rendering
- `calculateProgressStats()` - Calculate all statistics from workout data
- `renderEstimated1RMs()` - Track 1RM changes over time
- `renderLiftBreakdown()` - Show per-lift statistics

**Files Modified:**
- `index.html` (main app file)

### 2. Roadmap Creation ✅
**File:** `ROADMAP.md`

Created prioritized roadmap with 20 features organized in 4 priority tiers:
- **Priority 1:** Export/Backup, Plate Calculator, Rest Timer, PR Tracking
- **Priority 2:** SBS Hypertrophy Template, Exercise Notes, Advanced Analytics, Cloud Sync, Exercise Substitutions
- **Priority 3:** Custom Programs, Deload Intelligence, Training Partners, Warmup Calculator, Native Apps, Video Library
- **Priority 4:** AI Form Check, RPE Tracking, Nutrition Integration, Injury Tracking, Community Features

### 3. Hypertrophy Template Analysis ✅
**File:** `HYPERTROPHY_IMPLEMENTATION_PLAN.md`

Analyzed the Excel file: `SBS Hypertrophy Template.xlsx`

**Key Findings:**
- 21 weeks total (vs 20 in strength)
- Deload weeks: 7 and 14
- Program variants: 2x, 3x, 4x, 5x, 6x (includes 6x!)
- Different exercises: DB Bench, Block Pulls, Hack Squat, Leg Press, etc.
- Higher rep ranges: 10-15 reps (vs 5-10 in strength)
- Same Excel structure as strength template
- Same AMRAP progression logic

**Implementation Plan Created:**
- Recommended approach: Unified system (one codebase for both templates)
- Add "Program Type" selector in setup
- Parse Excel → generate `hypertrophy-program-data.js`
- Estimated effort: 6-10 hours

## Current State

### Git Status
- `index.html` - Progress tab committed and pushed ✅
- `SBS Hypertrophy Template.xlsx` - Untracked file

### Active Branch
- `main`

### Remote Repository
- https://github.com/jamierc/sbs_tracker.git
- Latest commit: `e1a59e2 - Add Progress tab with statistics and analytics`

## Next Steps (When Resuming)

### Option 1: Continue with Hypertrophy Implementation
1. Create Python script `parse_hypertrophy_template.py` to extract data from Excel
2. Generate `hypertrophy-program-data.js` with all program data
3. Update `index.html` setup screen to add "Program Type" selector
4. Implement state management for dual templates (strength vs hypertrophy)
5. Handle 21 weeks vs 20 weeks in UI
6. Test all program variants
7. Commit and push changes

### Option 2: Work on Priority 1 Features (Quick Wins)
1. **Export/Backup Data** - CSV and JSON export
2. **Plate Calculator** - Show which plates to load
3. **Rest Timer** - Built-in countdown timer
4. **PR Tracking** - Auto-detect personal records

### Option 3: Other Roadmap Items
See `ROADMAP.md` for full list of planned features.

## Important Context for Resumption

### File Structure
- **Main app:** `index.html` (this is the active file)
- **Program data:** Embedded in `index.html` as `PROGRAM_WEEKS` object
- **Storage:** Browser localStorage (`sbs-tracker-v2` key)
- **PWA files:** `manifest.json`, `sw.js`, icons

### Key Variables in App
- `appData.programType` - Would be added for hypertrophy ("strength" or "hypertrophy")
- `appData.selectedProgram` - Current program variant ("2x", "3x", etc.)
- `appData.currentWeek` - Week number (1-20 for strength, 1-21 for hypertrophy)
- `appData.workouts` - All workout data with AMRAP tracking
- `appData.oneRepMaxes` - User's 1RMs for main lifts

### Progression Logic
- Uses Training Max (TM) based calculations
- AMRAP performance adjusts next week's weights
- Progression table in `calculateProgression()` function
- Week intensity percentages in `WEEK_INTENSITY` object

### User's Request Before Pausing
User said hypertrophy template is in the folder and asked to analyze it for implementation.

## Documents Created This Session

1. `ROADMAP.md` - Prioritized feature roadmap (20 items)
2. `HYPERTROPHY_IMPLEMENTATION_PLAN.md` - Detailed implementation plan for hypertrophy template
3. `SESSION_NOTES.md` - This file

## Questions to Ask When Resuming

1. Do you want to continue with hypertrophy implementation or work on other features?
2. Should we add `SBS Hypertrophy Template.xlsx` to git or keep it local only?

---

## Session 2 - Auxiliary Exercise Weight Fix

**Date:** 2026-01-23
**Status:** Completed ✅

### Problem Identified

**Bug #1: Exercise Name Mapping Confusion**
- The program has auxiliary exercises mapped to specific slots:
  - `squat-aux-1` → "Leg Press" (Day 2 in 3x program)
  - `squat-aux-2` → "Hack Squat" (Day 3 in 3x program)
  - `deadlift-aux` → "Romanian Deadlift" (Day 1 in 3x program)
- Users were confused when seeing "Romanian Deadlift" on Day 1, thinking it was a squat auxiliary
- It's actually the deadlift auxiliary!

**Bug #2: Incorrect Weight Calculation When Swapping Exercises**
- Weights in the program are pre-calculated from the Excel template using Training Max (TM) values:
  - Leg Press: 420kg 1RM (TM = 378kg)
  - Hack Squat: 460kg 1RM (TM = 414kg)
  - Romanian Deadlift: 500kg 1RM (TM = 450kg)
- When selecting "Leg Press" for both squat auxiliaries:
  - Day 2 Leg Press: 272.5kg (correct - based on Leg Press TM)
  - Day 3 Leg Press: 300kg (INCORRECT - using Hack Squat TM!)
- The weight wasn't being recalculated when swapping exercises

### Investigation Results

1. Weights were NOT recalculated when swapping exercises - they inherited weights from the original exercise
2. No 1RM tracking for auxiliary exercises - only for main lifts
3. This affected ALL auxiliary swaps, not just Leg Press

### Solution Implemented

Updated the `applyAuxiliaryExercises()` function in `index.html` (around line 7800):

1. **Defined 1RM values for all auxiliary exercises:**
   - Used actual values from the SBS Hypertrophy Template for default exercises
   - Added estimated multipliers for all other possible auxiliary exercises
   - Example: Front Squat = 0.85 × Squat 1RM, Close Grip Bench = 0.88 × Bench 1RM

2. **Weight recalculation logic:**
   - When swapping exercises, calculate ratio: `newRM / originalRM`
   - Apply ratio to weight: `newWeight = oldWeight × ratio`
   - Round to nearest 0.25kg for practical plate loading
   - Example: Hack Squat (300kg) → Leg Press: `300 × (420/460) = 273.9kg`

3. **Code structure:**
   ```javascript
   const auxiliary1RMs = {
     'Leg Press': 420,
     'Hack Squat': 460,
     'Front Squat': appData.oneRepMaxes.squat * 0.85,
     // ... etc
   };

   // Calculate weight adjustment
   const weightRatio = newRM / originalRM;
   ex.weight = Math.round(ex.weight * weightRatio * 4) / 4;
   ```

### Files Modified

- `index.html` - Updated `applyAuxiliaryExercises()` function (lines ~7800-7900)

### Testing Notes

- Weight calculations now adjust proportionally when swapping exercises
- Same auxiliary exercise now has consistent weights across all days
- Backwards compatible with old auxiliary exercise format

### Additional Fix: Program Data Bug

---

## Session 3 - Roadmap Execution (Phase 0+)

**Date:** 2026-02-06
**Status:** In progress

### Checklist
- [x] Save new roadmap file `WORKOUT_TRACKER_ROADMAP.md`
- [x] Phase 0 UI: Modularization-lite (extract CSS/JS), data status indicator, empty-state/onboarding hints
- [x] Phase 0 Backend: Export/import (JSON + CSV), integrity checks, migration warnings
- [x] Phase 1 UI: Navigation/workflow UX improvements
- [x] Phase 1 Backend: IndexedDB data layer
- [ ] Phase 2 UI: Visual design system
- [ ] Phase 2 Backend: Sync-ready backend foundation
- [ ] Phase 3 UI: Delight/retention features
- [ ] Phase 3 Backend: Sync queue + observability
- [ ] Phase 4 Backend: Hevy integration hardening

### Notes
- Added a lightweight design system in `styles.css` (font scale, transitions, card/pill patterns).
- Applied new `card` styling to workout, history, and progress stat cards.

**Problem Discovered:**
The 3x program data had incorrect exercises on Day 3. Instead of having:
- Day 2: Leg Press (squat-aux-1)
- Day 3: Hack Squat (squat-aux-2)

It had:
- Day 2: Leg Press (correct)
- Day 3: Leg Press (WRONG - should be Hack Squat!)

This meant that when users selected Leg Press as squat-aux-1, they were seeing BOTH Day 2 and Day 3 with Leg Press, and there was no way to have Hack Squat in their program.

**Fix Applied:**
1. Created Python script (`fix_day3_exercises.py`) to systematically replace Leg Press with Hack Squat on all Day 3s in the 3x program
2. Fixed all 20 weeks (21 total Day 3s including the last week)
3. Adjusted weights proportionally (Leg Press → Hack Squat weight ratio: 1.087x)
4. Manually fixed the last 2 instances that the script missed

**Result:**
- 3x Program now has 0 instances of Leg Press on Day 3
- 3x Program now has 21 instances of Hack Squat (all on Day 3)
- Day 2 still has Leg Press (20 instances, one per week)

**Now the mapping works correctly:**
- Day 1: Romanian Deadlift = deadlift-aux
- Day 2: Leg Press = squat-aux-1
- Day 3: Hack Squat = squat-aux-2

When users select different exercises in the auxiliary settings, the correct exercises will be replaced!

### Next Steps

1. Test thoroughly with different auxiliary selections
2. Commit changes with descriptive message
3. Update service worker cache version (currently v18)

---

**Ready to resume at any time!**
