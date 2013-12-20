angular-node
============

## Setup requirements (Ubuntu):

Install mongodb, node.js, express.js, mongoose:

## mongodb:

* http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/
* sudo apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
* sudo gedit /etc/apt/sources.list.d/10gen.list
* Copy the following to the file: deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen
* sudo apt-get update
* sudo apt-get install mongodb-10gen

mongodb will start by itself but if need be here is how to start/stop:

* sudo service mongodb start/stop

Verify mongodb is successfully installed:

* Start shell: mongo
* db.test.save( { a: 1 } )
* db.test.find()

## node.js (also installs npm - node package manager):

* sudo apt-get install python-software-properties python g++ make
* sudo add-apt-repository ppa:chris-lea/node.js
* sudo apt-get update
* sudo apt-get install nodejs

verify node.js installed:

* Start shell: node

## express.js:

* sudo npm install express -g

verify express.js install:

* npm ls

## mongoose:

* sudo npm install mongoose

Clone repo and then CD to the directory.
Run following to install all the required packages:

* npm install

Creating project:

    express -c stylus angular-node

Install nodemon so don't have to restart each time code changes:

    npm install -g nodemon

Start server using nodemon instead of node (development only):

    nodemon app.js
