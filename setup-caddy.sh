#!/bin/bash
# Configure Caddy on VPS for Casa Carolina Moreré

# Create Caddyfile for the domain
cat > /etc/caddy/Caddyfile << 'EOF'
casacarolinamorere.com, www.casacarolinamorere.com {
    root * /var/www/casacarolinamorere
    encode gzip
    file_server
    
    # Handle SPA routing - serve index.html for all routes
    try_files {path} /index.html
}

# Fallback for direct IP access
:80, :443 {
    root * /var/www/casacarolinamorere
    encode gzip
    file_server
    try_files {path} /index.html
}
EOF

# Reload Caddy
caddy reload --config /etc/caddy/Caddyfile || caddy run --config /etc/caddy/Caddyfile &

echo "✅ Caddy configured!"
