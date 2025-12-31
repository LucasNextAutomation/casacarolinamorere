# Casa Carolina Moreré

Beachfront eco-house rental website for a property in Moreré, Bahia, Brazil.

## Tech Stack
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (CDN)
- **Deployment**: Vercel

## Infrastructure
- **Live Site**: https://casacarolinamorere.com
- **Domain**: Scaleway DNS (A record points to Vercel `76.76.21.21`)
- **Media Storage**: Scaleway S3

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run locally:
   ```bash
   npm run dev
   ```

## Deployment

The site is deployed on **Vercel** connected to the GitHub repository.

To deploy updates, simply push to the `main` branch:

```bash
git add .
git commit -m "Update site"
git push origin main
```

Vercel will detect the change, build, and deploy automatically.
