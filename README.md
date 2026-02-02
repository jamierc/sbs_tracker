# SBS Workout Tracker

A simple web app to track your Stronger By Science (SBS) workout program for all 20 weeks.

## How to Use

### First Time Setup

1. Open `index.html` in your web browser (Chrome, Safari, Firefox, etc.)
2. You'll see a setup screen asking for:
   - **Which week you're starting on** (Week 1-20)
   - **Your 1RM (one-rep max) for each lift**: Squat, Bench Press, Deadlift, OHP
3. Enter your values and click "Start Training!"

### Using the Tracker

1. **Select Your Day**: Click Day 1, Day 2, or Day 3 at the top
2. **View Your Workout**: See weight, reps, target, and sets for each exercise
3. **Enter AMRAP Reps**: After completing your last set (AMRAP = As Many Reps As Possible), enter how many reps you got
4. **See Next Week's Weight**: The app shows a live preview of your next week's weight based on your AMRAP performance
5. **Complete the Week**: Once you've done all 3 days, click "Complete Week & Move to Next"
   - The app automatically adjusts next week's weights based on your AMRAP performance

### Progression Logic

The app automatically adjusts weights based on your AMRAP performance:

- **Below target by 2+ reps**: -5% (weight decreases)
- **Below target by 1 rep**: -2% (slight decrease)
- **Hit target exactly**: 0% (same weight)
- **Beat target by 1 rep**: +0.5% (small increase)
- **Beat target by 2+ reps**: +1% (weight increases)

All weights are rounded to the nearest 2.5kg.

### Settings & Adjustments

Access the Settings tab to:
- **Update 1RM values**: Adjust your maxes if they've changed
- **Jump to a different week**: Skip ahead or go back to any week
- **Load historical data**: Import your AMRAP history for weeks 1-15 (if available)
- **Reset all data**: Start fresh with a new setup

### Program Features

- **All 20 weeks included**: Full program data for weeks 1-20
- **Deload weeks**: Weeks 7 and 14 are deload weeks (no AMRAP tracking)
- **Automatic progression**: Weights adjust based on your actual performance
- **History tracking**: View all your past workouts in the History tab
- **Offline support**: Works completely offline once loaded

## Gym/Mobile Use

The app is mobile-friendly and works great on phones. For detailed instructions on using it at the gym without a laptop/server, see **[DEPLOYMENT.md](DEPLOYMENT.md)**.

**Quick Options:**
1. **Save to phone** (easiest): Email the HTML file to yourself, open on phone, save to Files app
2. **Host on GitHub Pages** (best for multi-device): Free hosting accessible anywhere
3. **Netlify Drop**: Drag-and-drop deployment in seconds
4. **Add to Home Screen**: Get an app-like icon on your phone

The tracker works 100% offline once loaded!

## Data Storage

All your workout data is saved in your browser's localStorage. This means:
- Works offline
- Data persists between sessions
- Clearing browser data will erase your progress
- Data is device-specific (doesn't sync between devices)

## Future Enhancements

Possible additions for later:
- iOS/Android native app
- Cloud sync across devices
- Exercise history and charts
- Export to CSV
- Notes and videos per workout
