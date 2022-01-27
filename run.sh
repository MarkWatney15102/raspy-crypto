#!/bin/bash

sudo apt install apache2
sudo apt install ufw
sudo apt install nodejs

sudo ufw allow 43921
sudo ufw enable
