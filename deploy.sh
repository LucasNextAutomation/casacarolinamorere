#!/bin/bash
# Casa Carolina Moreré - Deploy Script
# Run this script to deploy the website to your VPS

set -e

# Configuration - UPDATE THESE VALUES
VPS_USER="root"
VPS_IP="YOUR_VPS_IP_HERE"
REMOTE_PATH="/var/www/casacarolinamorere"

echo "🏗️  Building production bundle..."
npm run build

echo "📦 Uploading to VPS..."
rsync -avz --delete dist/ ${VPS_USER}@${VPS_IP}:${REMOTE_PATH}/

echo "✅ Deployment complete!"
echo "🌐 Visit https://casacarolinamorere.com to see your changes"
