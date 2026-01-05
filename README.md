# Casa Carolina Moreré - Website Project

## 🏠 Project Overview
A premium vacation rental website for a beachfront eco-house in Moreré, Boipeba Island, Bahia, Brazil.

**Live Site:** https://casacarolinamorere.com (or your Vercel URL)

---

## 🚀 Quick Start

### Open this project:
```bash
cd /Users/lucaseschapasse/.gemini/antigravity/scratch/casa-carolina-morere
```

### Run locally:
```bash
npm install
npm run dev
```
Then open http://localhost:5173

### Deploy changes:
```bash
git add .
git commit -m "Your change description"
git push
```
Vercel auto-deploys on push to `main`.

---

## 🔑 Important Accounts & Credentials

### GitHub Repository
- **URL:** https://github.com/LucasNextAutomation/casacarolinamorere
- **Branch:** main (auto-deploys to Vercel)

### Vercel (Hosting)
- **Dashboard:** https://vercel.com/dashboard
- **Project:** casacarolinamorere
- **Environment Variables:**
  - `STRIPE_SECRET_KEY` - Your Stripe secret key (stored securely in Vercel)

### Stripe (Payments)
- **Dashboard:** https://dashboard.stripe.com
- **Public Key:** `pk_live_51ShDOOJlKm6CWMnamXBQAVr2vJOTYxqvPgO2eCgQM4jbcIn6UYi4D2oHnTMaDAw9SpKQqKhMAoY9yJrP2vYioex900YW5zTdJy`
- **Secret Key:** Stored in Vercel environment variables (never commit to code!)

### Image Storage (Scaleway S3)
- **Base URL:** `https://casacarolinamorere-media.s3.fr-par.scw.cloud/`
- **Bucket:** casacarolinamorere-media
- To add new images: Upload to Scaleway bucket, then reference by filename

### Calendar Sync (iCal)
- **Airbnb iCal:** `https://www.airbnb.fr/calendar/ical/1574720018210550640.ics?...`
- **Google Calendar (Private):** `https://calendar.google.com/calendar/ical/carophe%40hotmail.com/private-.../basic.ics`
- These are configured in `/api/calendar.ts`

---

## 📁 Key Files to Edit

| What to change | File |
|---------------|------|
| **Translations** (all languages) | `/constants.ts` |
| **Homepage** content/layout | `/pages/Home.tsx` |
| **House page** images/sections | `/pages/TheHouse.tsx` |
| **Experience page** | `/pages/Experience.tsx` |
| **Booking/Calendar** | `/pages/Booking.tsx` |
| **Navigation** | `/components/Navbar.tsx` |
| **Colors/Fonts/Animations** | `/index.html` (tailwind config + CSS) |
| **Pricing** | `/pages/Booking.tsx` (search for `pricePerNight`) |
| **Calendar API** | `/api/calendar.ts` |
| **Stripe Checkout** | `/api/create-checkout-session.ts` |

---

## 🎨 Design System

### Colors (defined in index.html)
- **Ocean (dark green):** `#052E25`
- **Sand (linen):** `#E6E2D6`
- **Sunlight (bronze/gold):** `#B38B59`
- **Sea (teal):** `#1A5F7A`

### Fonts
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

### CSS Classes
- `hover-lift` - Subtle lift on hover
- `image-reveal` - Zoom effect on images
- `underline-anim` - Animated underline
- `glass` - Frosted glass effect
- `animate-fade-in-up` - Fade in from below
- `animate-float` - Gentle floating animation

---

## 🌍 Languages Supported
- 🇧🇷 Portuguese (PT) - Default
- 🇬🇧 English (EN)
- 🇫🇷 French (FR)
- 🇪🇸 Spanish (ES)

To add/edit translations, edit `TRANSLATIONS` in `/constants.ts`

---

## 📷 Adding New Images

1. Upload image to Scaleway bucket
2. Note the exact filename
3. Add to the relevant page (e.g., `TheHouse.tsx`)
4. Use format: `"your-image-name.jpg"` (exact filename)

---

## ⚠️ Common Issues

### Images not loading?
- Check the exact filename (case-sensitive!)
- Spaces in filenames are OK (e.g., `"Chambre 1.jpg"`)

### Calendar not syncing?
- Check `/api/calendar.ts` for iCal URLs
- Google Calendar can take 5-10 min to update

### Stripe not working?
- Verify `STRIPE_SECRET_KEY` in Vercel environment variables
- Redeploy after adding/changing env vars

---

## 🛠️ Tech Stack
- **Framework:** React + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (serverless)
- **Payments:** Stripe Checkout API
- **Images:** Scaleway Object Storage
- **Calendar:** iCal parsing (server-side)

---

## 📞 Support Commands

```bash
# View recent changes
git log --oneline -10

# Undo last commit (before push)
git reset --soft HEAD~1

# Pull latest from GitHub
git pull

# Check Vercel deployment status
# Go to: https://vercel.com/dashboard → Project → Deployments
```

---

*Last updated: January 2026*
