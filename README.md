# Casa Carolina Moreré

Beachfront eco-house rental website for a property in Moreré, Bahia, Brazil.

## Tech Stack
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (CDN)
- **Routing**: React Router DOM 7
- **Icons**: Lucide React

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

1. Edit `deploy.sh` and set your VPS IP address
2. Run the deploy script:
```bash
./deploy.sh
```

Or manually:
```bash
npm run build
rsync -avz --delete dist/ user@YOUR_VPS_IP:/var/www/casacarolinamorere/
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
- Booking request form
- Guest reviews section
- Location info with local attractions

## Infrastructure
- **Domain**: casacarolinamorere.com
- **Hosted on**: Scaleway VPS (Ubuntu)
- **Web Server**: Caddy (auto HTTPS)
