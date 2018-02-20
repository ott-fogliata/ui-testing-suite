#!/bin/sh

sudo apt-get install openjdk-8-jre-headless
sudo apt-get install nodejs-legacy
sudo apt-get install npm
sudo npm install -g nightwatch
sudo npm install  js-yaml

# Add Google Chrome's repo to sources.list
echo "deb http://dl.google.com/linux/chrome/deb/ stable main" | sudo tee -a /etc/apt/sources.list

# Install Google's public key used for signing packages (e.g. Chrome)
# (Source: http://www.google.com/linuxrepositories/)
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -

# Update apt sources:
sudo apt-get update

# Install Python, pip, Selenium:
sudo apt-get -y install python python-pip
sudo pip install selenium
sudo apt-get -y install default-jre  # if not installed yet
sudo npm install protractor -g

# Install Google Chrome:
sudo apt-get -y install libxpm4 libxrender1 libgtk2.0-0 libnss3 libgconf-2-4
sudo apt-get -y install google-chrome-stable

# Dependencies to make "headless" chrome/selenium work:
sudo apt-get -y install xvfb gtk2-engines-pixbuf
sudo apt-get -y install xfonts-cyrillic xfonts-100dpi xfonts-75dpi xfonts-base xfonts-scalable

# Optional but nifty: For capturing screenshots of Xvfb display:
sudo apt-get -y install imagemagick x11-apps

# Make sure that Xvfb starts everytime the box/vm is booted:
echo "Starting X virtual framebuffer (Xvfb) in background..."
Xvfb -ac :99 -screen 0 1280x1024x16 &
export DISPLAY=:99

# Optionally, capture screenshots using the command:
#xwd -root -display :99 | convert xwd:- screenshot.png