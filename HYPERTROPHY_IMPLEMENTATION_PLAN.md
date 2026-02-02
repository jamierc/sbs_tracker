# SBS Hypertrophy Template Implementation Plan

## Overview

The SBS Hypertrophy Template has been analyzed and is ready for implementation. This document outlines the key findings and implementation approach.

## Template Analysis

### Structure
- **21 weeks total** (vs 20 weeks in strength template)
- **Deload weeks:** Week 7 and Week 14 (no AMRAP targets, same as strength)
- **Program variants:** 2x, 3x, 4x, 5x, 6x days per week (strength has 2x-5x)
- **Excel format:** Same multi-sheet structure as strength template

### Exercise Composition

**3x Program (3 days/week):**
- **Day 1:** Squat, Romanian Deadlift, DB Bench
- **Day 2:** Bench Press, OHP, Leg Press
- **Day 3:** Block Pulls, Incline Press, Hack Squat, DB OHP

**2x Program:** Squat, Bench Press, Romanian Deadlift, DB OHP (Day 1 sample)

**4x-6x Programs:** Similar compounds with variations

### Data Format Differences from Strength Template

| Field | Strength Template | Hypertrophy Template |
|-------|------------------|---------------------|
| Reps | "reps" | "Reps per normal set" |
| Target | "target" | "Rep out target" |
| Sets | "sets" | "Set goal" |
| AMRAP tracking | "amrapReps" | "Reps on last set" |

**Key similarity:** Both use Training Max (TM) rows that we can filter out

### Sample Week 1, Day 1 Data (3x):
```
Exercise: Squat
  Weight: 342.5 kg
  Reps per normal set: 10
  Rep out target: 12
  Set goal: 4

Exercise: Romanian Deadlift
  Weight: 325 kg
  Reps per normal set: 12
  Rep out target: 15
  Set goal: 4

Exercise: DB Bench
  Weight: 182.5 kg
  Reps per normal set: 12
  Rep out target: 15
  Set goal: 4
```

### Progression Scheme
- Higher rep ranges (10-15 reps) vs strength template (5-10 reps)
- Still uses AMRAP progression for autoregulation
- Same progression percentages expected (need to verify)

## Implementation Approach

### Phase 1: Data Extraction (Similar to existing strength template process)

1. **Python Script to Parse Excel**
   - Read all sheets (2x, 3x, 4x, 5x, 6x)
   - Extract week-by-week data for each day
   - Filter out TM rows (Training Max indicators)
   - Convert to JSON format matching existing structure

2. **Generate JavaScript Data File**
   - Create `hypertrophy-program-data.js`
   - Structure: `HYPERTROPHY_PROGRAM_WEEKS[program][week][day][exercises]`
   - Example:
     ```javascript
     const HYPERTROPHY_PROGRAM_WEEKS = {
       "3x": {
         "1": {
           "1": [
             {name: "Squat", weight: 342.5, reps: 10, target: 12, sets: 4},
             {name: "Romanian Deadlift", weight: 325, reps: 12, target: 15, sets: 4},
             ...
           ]
         }
       }
     }
     ```

### Phase 2: UI Updates

1. **Setup Screen Enhancement**
   - Add program type selector: "Strength" vs "Hypertrophy"
   - Keep existing program variant selector (2x, 3x, 4x, 5x)
   - Add 6x option for hypertrophy
   - Default to "Strength" for backwards compatibility

2. **State Management**
   - Add `appData.programType` field ("strength" or "hypertrophy")
   - Load appropriate program data based on `programType` and `selectedProgram`
   - Example: If `programType: "hypertrophy"` and `selectedProgram: "3x"`, load `HYPERTROPHY_PROGRAM_WEEKS["3x"]`

3. **Display Adjustments**
   - UI labels can stay the same (Weight, Reps, Target, Sets)
   - Internally map "Reps per normal set" → "reps", "Rep out target" → "target", etc.
   - No major UI changes needed

### Phase 3: Progression Logic

1. **Verify Progression Tables**
   - Check if hypertrophy uses same progression percentages
   - May need separate `HYPERTROPHY_WEEK_INTENSITY` table
   - AMRAP progression logic should be identical

2. **Training Max Calculations**
   - Same TM-based progression as strength template
   - May need different intensity percentages per week

### Phase 4: Data Migration & Compatibility

1. **Backwards Compatibility**
   - Existing users default to "strength" program type
   - Don't break existing saved data
   - Add migration logic if needed

2. **Settings Updates**
   - Allow switching between strength/hypertrophy mid-program? (Probably not recommended)
   - Clear warning if switching program types

## Implementation Steps (Ordered)

### Step 1: Extract Data
```bash
# Create Python script to parse hypertrophy Excel
python3 parse_hypertrophy_template.py
# Outputs: hypertrophy-program-data.js
```

### Step 2: Integrate Data File
- Add `<script src="hypertrophy-program-data.js"></script>` to index.html
- Create fallback/loading logic

### Step 3: Update Setup Screen
```html
<div class="form-group">
    <label>Program Type</label>
    <select id="setup-program-type">
        <option value="strength" selected>Strength Template (20 weeks)</option>
        <option value="hypertrophy">Hypertrophy Template (21 weeks)</option>
    </select>
</div>
```

### Step 4: Update State & Loading Logic
```javascript
appData.programType = 'strength'; // or 'hypertrophy'

function loadProgramWeeks() {
    if (appData.programType === 'hypertrophy') {
        return HYPERTROPHY_PROGRAM_WEEKS[appData.selectedProgram];
    } else {
        return PROGRAM_WEEKS; // existing strength data
    }
}
```

### Step 5: Update Week Range
- Strength: 1-20 weeks
- Hypertrophy: 1-21 weeks
- Dynamically generate week selector based on program type

### Step 6: Testing
- Test all program variants (2x-6x)
- Test week navigation (1-21)
- Test deload weeks (7, 14)
- Test AMRAP progression
- Test switching programs in setup

## Potential Challenges

### 1. Exercise Name Differences
- Hypertrophy uses different exercises (DB Bench, Block Pulls, Hack Squat, etc.)
- Progress tracking needs to handle different exercise names
- Estimated 1RM may not apply to all variations

### 2. 1RM Calculations
- Hypertrophy uses different lifts (e.g., DB Bench instead of Bench Press)
- May need separate 1RM inputs for hypertrophy variants
- Or: Map similar lifts (DB Bench → use Bench Press 1RM × 0.65)

### 3. Data Storage
- Need to store program type in localStorage
- Migration for existing users
- Ensure settings/history work for both templates

### 4. Volume Calculations
- Hypertrophy will have higher volume due to higher reps
- Progress tab charts will show different patterns
- May need separate comparison between templates

## Recommended Approach

### Option A: Unified System (Recommended)
- Single codebase handles both templates
- User selects template type during setup
- Seamless switching between templates (with data migration warning)
- Shared progress tracking (but separate histories)

### Option B: Separate Pages
- `index.html` for strength
- `index-hypertrophy.html` for hypertrophy
- Completely separate tracking
- Easier to implement but less user-friendly

**Recommendation: Go with Option A** - It provides better UX and keeps codebase unified.

## Files to Create/Modify

### New Files:
1. `parse_hypertrophy_template.py` - Excel parser script
2. `hypertrophy-program-data.js` - Generated data file

### Modified Files:
1. `index.html`
   - Add program type selector in setup
   - Update state management
   - Add hypertrophy data script tag
   - Update week navigation logic
   - Handle 21 weeks vs 20 weeks

2. `ROADMAP.md`
   - Update status of "SBS Hypertrophy Template" to "In Progress"

## Estimated Effort

- **Data Extraction:** 1-2 hours (parsing script + validation)
- **UI Updates:** 2-3 hours (setup screen, state management)
- **Progression Logic:** 1-2 hours (verify and adapt)
- **Testing:** 2-3 hours (all variants, edge cases)

**Total: 6-10 hours**

## Next Steps

1. Create Python parsing script for hypertrophy template
2. Generate `hypertrophy-program-data.js`
3. Update setup screen with program type selector
4. Implement state management for dual templates
5. Test thoroughly with sample data
6. Deploy and update documentation

---

## Notes

- The hypertrophy template is well-structured and very similar to strength template
- Main differences are exercise selection and rep ranges
- Implementation should be straightforward with proper planning
- Consider user education: when to use strength vs hypertrophy
