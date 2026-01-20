# SBS Tracker - What You Need to Share

## The Simple Answer

**You only need ONE file:** `index.html`

That's it! Everything else in this folder is optional.

## What Each File Is

### Files You Need:

- **`index.html`** - The complete workout tracker (share this!)
  - Also available as `sbs-tracker-v2-gen.html` or `workout-tracker.html` (same file, different names)

### Files You DON'T Need to Share:

- **`serve.py`** - Python script for local testing only (not needed)
- **`weeks_data.json`** - Source data (already embedded in the HTML)
- **`amrap_history.json`** - Historical data (already embedded in the HTML)
- **`program-data.js`** - Old version data file (not needed)
- **`sbs-tracker.html`** - Old version (superseded by index.html)
- **`sbs-tracker-v2.html`** - Old version (superseded by index.html)
- **Excel file** - Source spreadsheet (not needed for the app)
- **README.md** - Documentation (helpful but not required)
- **DEPLOYMENT.md** - Setup instructions (helpful but not required)

## How the HTML File Works

The `index.html` file contains:
- ✅ All 20 weeks of program data
- ✅ All progression calculations
- ✅ All styling (looks nice on phone/desktop)
- ✅ Offline functionality
- ✅ Local data storage (each user's data stays on their device)
- ✅ Setup screen for first-time users
- ✅ Historical AMRAP data for weeks 1-15

**No server, database, or internet connection needed** (after first load)

## How to Share

### Option A: Send the File Directly
1. Send `index.html` via email/chat
2. Recipient opens it in their browser
3. Done!

### Option B: Host Online (Recommended)
1. Upload `index.html` to GitHub Pages or Netlify
2. Share one URL with everyone
3. Everyone gets updates automatically when you upload a new version

See `GITHUB-SETUP.md` for detailed hosting instructions.

## For Recipients

When someone receives your tracker:

**If it's a file:**
- Open `index.html` in Safari (iPhone) or Chrome (Android)
- On iPhone: Add to Home Screen for app-like experience
- On Android: Chrome menu → Add to Home screen

**If it's a URL:**
- Open the link in any browser
- Add to Home Screen (both iPhone and Android)
- Works offline after first load

## Data Privacy

- Each person's workout data is stored ONLY on their own device
- No data is synced or shared
- Completely private and separate
- Clearing browser data will delete their progress

## Questions?

- How does it work? It's a self-contained HTML file with embedded JavaScript
- Does it need internet? No (works offline after first load)
- Does it need a server? No (the Python script was only for testing)
- Can I customize it? Yes! Edit the HTML file in any text editor
- How do I update it? Upload a new version to GitHub (if hosted) or send new file
