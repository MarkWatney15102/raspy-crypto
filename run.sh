#!/bin/bash

sudo apt install ufw -y

sudo ufw allow 43921
sudo ufw enable

wget https://nodejs.org/download/release/v11.15.0/node-v11.15.0-linux-armv7l.tar.gz
tar -xzf node-v11.15.0-linux-armv7l.tar.gz
cd node-v11.15.0-linux-armv7l
sudo cp -R * /usr/local/
cd ..
sudo rm -rf node-v11.15.0-linux-armv7l
sudo rm node-v11.15.0-linux-armv7l.tar.gz

sudo apt install apt gphoto2 -y

sudo apt install libgphoto2-dev -y

npm i   