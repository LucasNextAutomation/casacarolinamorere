# Casa Carolina Moreré

Beachfront eco-house rental website for a property in Moreré, Bahia, Brazil.

## Tech Stack
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (CDN)
- **Routing**: React Router DOM 7
- **Icons**: Lucide React

## Infrastructure
- **Domain**: casacarolinamorere.com (Scaleway DNS)
- **VPS**: Scaleway Ubuntu
- **Web Server**: Caddy (auto HTTPS via Let's Encrypt)
- **Media Bucket**: https://casacarolinamorere-media.s3.fr-par.scw.cloud
- **Backend**: Node.js for Stripe, email, calendar sync
- **GitHub**: https://github.com/LucasNextAutomation/casacarolinamorere

## Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to VPS

```bash
# Option 1: From local machine
./deploy.sh

# Option 2: SSH into VPS, then:
cd /var/www/casacarolinamorere
git pull origin main
npm install && npm run build
```

## Project Structure

```
├── components/     # Navbar, Footer
├── pages/          # Home, TheHouse, Experience, Location, Reviews, Booking
├── services/       # Calendar sync, email notifications, iCal parsing
├── App.tsx         # Main app with language context + routing
├── constants.ts    # Translations, pricing, calendar config
└── types.ts        # TypeScript interfaces
```

## Features
- Multi-language support (PT/EN/FR)
- Calendar integration with Airbnb iCal sync
- Booking request form with Stripe payments
- Guest reviews section
- Location info with local attractions
