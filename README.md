# MetisCulturegramHackathon

Step 1: To build this application, we need first some dependencies.
1. Node JS: 	This will enable the installation of all the packages of the computer and also enable the execution of the client side application. Node JS (https://nodejs.org/en/download/).
2. Hardhat framework: This will be used to create Metis layer 2 smart contracts with the solidity programing language, write test against them and deploy the smart contracts to the metis layer 2 network. Install Hardhat from the command line using the following commands.
npm install --save-dev hardhat
3. MetaMask for Browsers.  This Etherium wallet is installed as a browser extension that will enable the browser to connect to the blockchain easily.
Step 2: clone project from our directory, install all packages by following the following commands after starting, and ensure that you are connected to the internet.
//clone the repository
git clone https://github.com/lcaei/MetisCulturegramHackathon.git
//install all packages with node package manager
npm install 
//start the server to host the side of the application
npm run start
// Compile and deploy contracts 
yarn hardhat compile && yarn hardhat run scripts/deploy.ts --network metis
//Run the client decentralized app connected to the smart contract
Cd decentragram && yarn start


