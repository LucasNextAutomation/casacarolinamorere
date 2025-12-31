# Casa Carolina Moreré

Beachfront eco-house rental website for a property in Moreré, Bahia, Brazil.

## Tech Stack
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (CDN)
- **Routing**: React Router DOM 7
- **Deployment**: Vercel (Auto-deploy from GitHub)

## Infrastructure
- **Domain**: casacarolinamorere.com (Scaleway DNS pointing to Vercel)
- **Hosting**: Vercel
- **Media**: https://casacarolinamorere-media.s3.fr-par.scw.cloud
- **Code**: https://github.com/LucasNextAutomation/casacarolinamorere

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

## Deployment
Push to `main` branch to trigger automatic deployment on Vercel:

```bash
git push origin main
```
