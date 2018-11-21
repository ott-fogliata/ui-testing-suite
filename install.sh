#!/usr/bin/env bash

RED='\033[0;31m'
PRP='\033[0;35m' # purple
GRN='\033[0;32m' # green
YLW='\033[0;33m' # yellow
#
LRD='\033[0;31m' # light red
LBL='\033[0;34m' # light blue
LGR='\033[0;32m' # light green
#
DGA='\033[1;30m' # dark grey
BLK='\033[0;30m' # black
#
NC='\033[0m' # No Color

echo
echo
echo -e "${DGA} ------------------------------------------- ${NC}"
echo -e "${LBL}          Selenium Grid & Nightwatch         ${NC}"
echo -e "${DGA} ------------------------------------------- ${NC}"
echo -e "${DGA} Installing Dependencies... ${NC}"
echo
echo

# Get Docker CE for Ubuntu
# https://docs.docker.com/install/linux/docker-ce/ubuntu/
function dockerSetup {

    echo -e "${DGA}"
    sudo groupadd docker
    sudo usermod -aG docker $USER
    sudo apt-get remove -y docker docker-engine docker.io
    sudo apt-get update
    sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo apt-key fingerprint 0EBFCD88
    sudo add-apt-repository \
       "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
       bionic \
       stable"
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo apt install -y docker-ce
    sudo systemctl enable docker
    sudo docker run hello-world
    sudo curl -L https://github.com/docker/compose/releases/download/1.17.1/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    docker-compose --version
    echo -e "${NC}"

}

echo -n " Do you want to install and setting Docker (y/n)? "
read answer

if [ "$answer" != "${answer#[Yy]}" ] ;then
    dockerSetup
else
    echo " Skipping Docker Setup..."
fi

echo -e "${DGA}"


echo -e "${NC}"

#sudo apt install -y ruby
#sudo gem install dory
# ------------------------------------------------------------------------------------------------------
#  Dory
# ------------------------------------------------------------------------------------------------------
#  Dory lets you forget about IP addresses and port numbers while you are developing
#  your application. Through the magic of local DNS and a reverse proxy, you can access
#  your app at the domain of your choosing.
#  For example, http://myapp.docker or http://this-is-a-really-long-name.but-its-cool-cause-i-like-it
# ------------------------------------------------------------------------------------------------------
#  dory attach          # Attach to the output of a docker service container
#  dory config-file     # Write a default config file
#  dory down            # Stop all dory services
#  dory help [COMMAND]  # Describe available commands or one specific command
#  dory ip              # Grab the IPv4 address of a running dory service
#  dory pull            # Pull down the docker images that dory uses
#  dory restart         # Stop and restart all dory services
#  dory status          # Report status of the dory services
#  dory up              # Bring up dory services (nginx-proxy, dnsmasq, resolv)
#  dory upgrade         # Upgrade dory to the latest version
#  dory version         # Check current installed version of dory
# ------------------------------------------------------------------------------------------------------
