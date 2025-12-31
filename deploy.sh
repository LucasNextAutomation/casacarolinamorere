#!/bin/bash
# Casa Carolina Moreré - Deploy Script
# Run this script to deploy the website to your VPS

set -e

# Configuration
VPS_USER="root"
VPS_IP="51.15.248.20"
REMOTE_PATH="/var/www/casacarolinamorere"

echo "🏗️  Building production bundle..."
npm run build

echo "� Creating remote directory (if needed)..."
ssh ${VPS_USER}@${VPS_IP} "mkdir -p ${REMOTE_PATH}"

echo "�📦 Uploading to VPS..."
rsync -avz --delete dist/ ${VPS_USER}@${VPS_IP}:${REMOTE_PATH}/

echo "✅ Deployment complete!"
echo "🌐 Visit https://casacarolinamorere.com to see your changes"
