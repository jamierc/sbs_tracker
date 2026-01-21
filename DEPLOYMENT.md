# Deployment Guide - SBS Tracker

## How to Deploy Updates to PWA Users

When you make changes to the app and want PWA users to receive the updates, follow these steps:

### 1. Update the Service Worker Cache Version

Edit `sw.js` and increment the `CACHE_VERSION`:

```javascript
// Before
const CACHE_VERSION = 'v3';

// After
const CACHE_VERSION = 'v4';
```

### 2. Commit and Push Changes

```bash
git add .
git commit -m "Your commit message"
git push
```

### 3. What Happens for PWA Users

- The app checks for updates every 60 seconds
- When a new version is detected, users see a prompt: "A new version of SBS Tracker is available! Click OK to update now."
- When they click OK, the page reloads with the latest version
- Old caches are automatically cleaned up

### 4. Manual Update (If Needed)

If users don't see the update prompt, they can manually force an update:

**On Mobile:**
- Close the app completely (swipe it away)
- Reopen the app
- Or: Pull down to refresh within the app

**On Desktop:**
- Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- Or: Close and reopen the PWA window

## Testing Updates Locally

1. Make your changes to `index.html` or other files
2. Increment `CACHE_VERSION` in `sw.js`
3. Open the app in your browser
4. Open DevTools > Application > Service Workers
5. Check "Update on reload"
6. Refresh the page
7. Verify your changes are visible

## Important Notes

- **Always increment CACHE_VERSION** when deploying updates, otherwise PWA users won't get the new version
- The version can be anything (v4, v5, v2.1.0, 2024-01-20, etc.) as long as it's different from the previous version
- The app is hosted on GitHub Pages, so changes pushed to `main` branch are automatically deployed
- PWA updates typically propagate within 1-2 minutes after pushing to GitHub

## Current Version

- **Cache Version:** v3
- **Last Updated:** 2026-01-21
- **Features:** PR tracking, History tab fix, Plate calculator, Export/Backup, Progress analytics
