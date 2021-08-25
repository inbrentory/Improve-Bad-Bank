# Improve-Bad-Bank

## Project Title: 
Improve Bad Bank

## Description/Motivation: 
This is the project in Back-End course, part of MITxPRO full stack development. Here we are trying to combine front-end and back end together, 
using MongoDB, Express, Cors. Improve better information security from the previous Bad Bank project with Authentication when request data.

## Installation Guidelines: 

1. If you Git clone files, and start with <node index.js> 
make sure you have MongoDB installed on your environment. Otherwise please check: https://robomongo.org/download

2. If using only part of the front-end files (in public) 
   start with 
   npm-init
   npm i express
   npm i cors
   npm i mongodb
   then create Data Abstraction Layer file (dal.js) and JS file to communicate with front-end part (index.js) 
   docker run -p 27017:27017 --name badbank -d mongo
   then run with <node index.js> 
   
## Screenshots:
![Image of LandingPage](https://github.com/inbrentory/Improve-Bad-Bank/blob/main/ImproveBadBank_LandingPage.JPG)

## Technology used: 
MongoDB
Express 
Node 
Docker

## Features: 
  You can sign up for new account, then log in to each function to add funding or withdraw. 

## License: 
  MIT (under MITxPRO MERN Full stack course) 