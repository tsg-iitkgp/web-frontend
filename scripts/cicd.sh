#!/bin/bash

cd /home/techcoordi/tsg-site/frontend || exit 1
git pull origin main
sudo docker build -t proffapt/tsg-site-frontend .
sudo docker-compose down
sudo docker-compose up -d
