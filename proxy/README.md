# Simple proxy server

This is a simple proxy server that combines independent services into a single web application.

## Related Projects
  - https://github.com/light-matter/8bnb-reserve-module
  - https://github.com/light-matter/8bnb-calendar-module
  - https://github.com/light-matter/8bnb-reviews-module
  - https://github.com/light-matter/8bnb-ImageCarousel

## Table of Contents
1. [Usage](#Usage)
2. [Syatem requirements](#Requirements)
3. [Deploy on AWS with Docker](#Development)

## Usage
The proxy consists of Node.js + Express that can accept inbound requests and forward them to their respective services.

The app was modeled after the following Airbnb listing:
https://www.airbnb.com/rooms/22724133

## Requirements
- Node v12
- NPM to install dependencies

To run on your local machine:
```sh
cd proxy
npm install
npm start
```

Open the browser on http://localhost:8080

## Development

### Deploying on AWS
- Initiate an EC2 instance with an Amazon Linux 2 AMI
- Install Docker (must use ECS compatible version below)
```sh
sudo yum update -y
sudo yum install git -y
sudo amazon-linux-extras install docker
sudo service docker start
sudo usermod -a -G docker ec2-user
logout
```
- Install docker-compose
```sh
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```
- Clone repo and run `docker-compose up` frm the project's root directory

