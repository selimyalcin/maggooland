npm run build
cd dist
[ ! -d "/var/www/html/marketplace_service" ] && mkdir /var/www/html/marketplace_service
sleep 1
cp -R * /var/www/html/marketplace_service/