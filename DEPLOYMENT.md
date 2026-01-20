# Portable Deployment Options for Gym Use

The SBS Workout Tracker is a single HTML file that works completely offline once loaded. Here are several ways to use it at the gym without needing a laptop or local server.

## Option 1: Save to Phone Directly (Easiest)

This is the simplest method and works on both iPhone and Android.

### For iPhone (iOS):
1. Email the `sbs-tracker-v2-gen.html` file to yourself
2. Open the email on your iPhone
3. Tap the HTML file attachment
4. Tap the Share button (square with up arrow)
5. Select "Save to Files"
6. Choose a location (e.g., "On My iPhone" > "Downloads")
7. Open the Files app, navigate to the saved file
8. Tap to open in Safari
9. Bookmark it for quick access

**Tip:** Add to Home Screen for app-like experience:
- While viewing the file in Safari, tap the Share button
- Scroll down and tap "Add to Home Screen"
- Name it "SBS Tracker" and tap "Add"
- Now you have an icon on your home screen!

### For Android:
1. Email or transfer the `sbs-tracker-v2-gen.html` file to your phone
2. Download the file to your device
3. Use a file manager app to locate it (usually in Downloads)
4. Tap the file to open it in Chrome or your default browser
5. Bookmark it for quick access

**Tip:** Create a shortcut:
- In Chrome, tap the menu (3 dots)
- Select "Add to Home screen"
- You'll get an app icon on your home screen

## Option 2: GitHub Pages (Free Static Hosting)

Host your tracker on GitHub for access from any device, anywhere.

### Steps:
1. Create a free GitHub account at https://github.com
2. Create a new repository named "sbs-tracker"
3. Upload `sbs-tracker-v2-gen.html` to the repository
4. Go to Settings > Pages
5. Under "Source", select "main" branch
6. Click "Save"
7. Your tracker will be live at: `https://yourusername.github.io/sbs-tracker/sbs-tracker-v2-gen.html`

**Pros:**
- Access from any device with internet
- Free forever
- Easy to update (just upload new file)
- Works on phone, tablet, laptop

**Cons:**
- Requires internet connection for first load (then works offline)
- Data is stored locally per device

## Option 3: Netlify Drop (Super Easy Hosting)

Netlify offers free static site hosting with drag-and-drop deployment.

### Steps:
1. Go to https://app.netlify.com/drop
2. Drag and drop `sbs-tracker-v2-gen.html` into the upload area
3. Netlify will give you a random URL like `random-name-123.netlify.app`
4. You can customize the URL in site settings

**Pros:**
- No account needed for basic use
- Instant deployment
- Free SSL (https)
- Custom domain support

## Option 4: Google Drive / Dropbox

Store the HTML file in cloud storage and access it from your phone.

### Steps:
1. Upload `sbs-tracker-v2-gen.html` to Google Drive or Dropbox
2. On your phone, open the file in the Drive/Dropbox app
3. Make the file "Available offline"
4. Open it in your browser when needed

**Note:** Some cloud storage apps may not display HTML files correctly. Test before relying on this method.

## Recommended Approach

**For Best Gym Experience:**

1. **Primary Method:** Save to phone directly (Option 1) - works 100% offline
2. **Backup Method:** Host on GitHub Pages (Option 2) - accessible from any device

This gives you offline access on your phone while also allowing you to check progress from your computer at home.

## Data Persistence

**Important Notes:**
- All your workout data is saved in your browser's localStorage
- Data is device-specific and browser-specific
- If you clear your browser cache/data, you'll lose your progress
- Data does NOT sync between devices automatically
- Consider taking screenshots or exporting data periodically as backup

## Updating the Tracker

If you need to update the tracker with bug fixes:

1. **Phone Storage:** Delete old file, save new file, update bookmark
2. **GitHub Pages:** Upload new file to repository (replaces old one)
3. **Netlify:** Drop new file (creates new deployment)

**Warning:** Updating the HTML file won't delete your saved data, as data is stored separately in localStorage.

## Troubleshooting

**Problem:** File won't open on phone
- Solution: Make sure it's named with `.html` extension
- Try opening with a different browser (Chrome, Safari, Firefox)

**Problem:** Data disappeared
- Solution: You likely cleared browser cache. Use the same browser consistently.

**Problem:** Can't add to home screen
- iOS: Must open in Safari (not Chrome)
- Android: Must open in Chrome (not Firefox or others)

**Problem:** Tracker loads old version after update
- Solution: Clear browser cache or do a "hard refresh" (varies by browser)
