# 📸 Quick Photo Setup

## Super Simple Steps:

### Option 1: Drag & Drop (Easiest!)
1. Find the photo you shared in our chat (blonde woman, pink background)
2. Save it to your Desktop or Downloads
3. Drag it into: `/Users/paulwallace/Desktop/yasmine-bateman-events/public/`
4. Rename it to: `yasmine-bateman.jpg`

### Option 2: Using Finder
1. Open Finder
2. Go to: `/Users/paulwallace/Desktop/yasmine-bateman-events/public/`
3. Drag the photo from your Downloads/Desktop into this folder
4. Rename to: `yasmine-bateman.jpg`

### Option 3: Use Terminal
```bash
# If photo is on Desktop:
cd /Users/paulwallace/Desktop/yasmine-bateman-events/public
cp ~/Desktop/[your-photo-filename].jpg yasmine-bateman.jpg

# If photo is in Downloads:
cp ~/Downloads/[your-photo-filename].jpg yasmine-bateman.jpg
```

---

## Then Commit It:

```bash
cd /Users/paulwallace/Desktop/yasmine-bateman-events
git add public/yasmine-bateman.jpg
git commit -m "✨ Add Yasmine's professional photo"
git push
```

---

## ✅ Done!

Once you do this, Yasmine's photo will appear beautifully on the About page with an elegant gold border!

**Current**: Pink placeholder with camera icon 📸  
**After**: Yasmine's professional portrait with luxury frame ✨

