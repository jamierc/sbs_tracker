# iPhone Setup - Avoid MacroFactor

## Problem
iOS is opening the HTML file in MacroFactor instead of Safari.

## Easy Solution: Open URL Directly in Safari

Since the server is running, you can bypass the file association issue entirely:

### Steps:

1. **On your iPhone, open Safari** (not Chrome, not MacroFactor)

2. **Type or paste this URL:**
   ```
   http://15.235.206.76:8000/index.html
   ```

3. **Wait for it to load** - you'll see the setup screen

4. **Add to Home Screen immediately:**
   - Tap the Share button (square with up arrow)
   - Scroll down and tap "Add to Home Screen"
   - Name it "SBS Tracker"
   - Tap "Add"

5. **Done!** You now have an app icon on your home screen

6. **Important:** After adding to home screen, it works offline! You don't need the server anymore.

## Alternative: Use Different Filename

I've created alternate versions you can try downloading:

- `workout-tracker.html` - simpler name
- `index.html` - even simpler

Try opening these from Files app instead.

## For Permanent Setup (No Server Needed)

Follow the DEPLOYMENT.md guide to:
1. Host on GitHub Pages (free, accessible anywhere)
2. Or use Netlify Drop (instant deployment)

Then you'll have a permanent URL that works from anywhere without needing your laptop.
