# Mike & Kari Wedding Website

Wedding website for Mike Harrington and Kari Duerksen - August 22, 2026

## Deploying to GitHub Pages

### 1. Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" in the top right and select "New repository"
3. Name it exactly: `mikeandkari.ca` (or any name you prefer)
4. Make it **Public**
5. Click "Create repository"

### 2. Upload Your Files

**Option A: Using GitHub's web interface**
1. On your new repository page, click "uploading an existing file"
2. Drag and drop all files from this folder (index.html, schedule.html, etc., plus the css and js folders)
3. Click "Commit changes"

**Option B: Using Git command line**
```bash
cd "Wedding Website"
git init
git add .
git commit -m "Initial wedding website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mikeandkari.ca.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (tab at the top)
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"
7. Wait 1-2 minutes for deployment

### 4. Connect Your Custom Domain (mikeandkari.ca)

**In GitHub:**
1. In Settings > Pages, under "Custom domain", enter: `mikeandkari.ca`
2. Click "Save"
3. Check "Enforce HTTPS" once it becomes available

**In Cloudflare:**
1. Log into your Cloudflare dashboard
2. Select mikeandkari.ca
3. Go to DNS settings
4. Add these DNS records:

| Type  | Name | Content                      |
|-------|------|------------------------------|
| CNAME | www  | YOUR_USERNAME.github.io     |
| CNAME | @    | YOUR_USERNAME.github.io     |

Or if using A records:
| Type | Name | Content         |
|------|------|-----------------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

5. Set SSL/TLS mode to "Full" in Cloudflare

**Create CNAME file:**
Add a file named `CNAME` (no extension) to your repository root with just:
```
mikeandkari.ca
```

### 5. Adding Your Google Form for RSVPs

1. Create a form at [forms.google.com](https://forms.google.com)
2. Suggested fields:
   - Guest name(s)
   - Email address
   - Will you be attending? (Yes/No/Undecided)
   - Number of guests in your party
   - Meal preference (if applicable)
   - Dietary restrictions
   - Song request (optional)
3. Click "Send" then the embed icon `< >`
4. Copy the iframe code
5. Edit `rsvp.html` and replace the placeholder `<div class="rsvp-placeholder">...</div>` with your iframe

## File Structure

```
Wedding Website/
├── index.html      # Homepage
├── schedule.html   # Day-of timeline
├── venue.html      # Ceremony & reception locations
├── hotels.html     # Accommodation options
├── travel.html     # Getting to Winnipeg
├── rsvp.html       # RSVP form
├── css/
│   └── style.css   # All styles
├── js/
│   └── main.js     # Navigation & interactions
└── README.md       # This file
```

## Customization

### Colors
Edit the CSS custom properties at the top of `css/style.css`:
```css
:root {
  --color-primary: #2c3e50;      /* Dark blue-gray */
  --color-secondary: #8b7355;    /* Warm brown */
  --color-accent: #c9a86c;       /* Gold accent */
  --color-background: #fdfbf7;   /* Cream background */
}
```

### Adding New Pages
1. Copy any existing page (e.g., `hotels.html`)
2. Update the content
3. Add a link in the `<nav>` section of ALL pages

### Room Block Information
The Hotels page has commented-out sections for room block details. Uncomment and fill in when ready.

## Need Help?

If you run into any issues with deployment, check:
- GitHub Pages documentation: https://docs.github.com/en/pages
- Cloudflare DNS documentation: https://developers.cloudflare.com/dns/
