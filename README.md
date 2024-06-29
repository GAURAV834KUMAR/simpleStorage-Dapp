# simpleStorage-Dapp Project

Welcome to the simpleStorage-Dapp project! This repository contains a decentralized application (DApp) that interacts with the Ethereum blockchain using the `simpleStorage.sol` smart contract.

## Setup Instructions

To get started with the project on your local machine, follow these steps:

### 1. Install Dependencies

Inside the project directory, run:
```bash
npm install
```
### 2. Start Local Ethereum Node

Open a new terminal and run:
```bash
npx hardhat node
```
### 3. Deploy Smart Contract

Open another terminal and run:
```bash
npx hardhat run --network localhost scripts/deploy.js
```
### 4. Launch the Frontend

Back in the first terminal, start the frontend:
```bash
npm run dev
```
### 5. Access Your Local DApp

Open your web browser and go to:
```bash
http://localhost:3000/
```

Additional Information
1) Dependencies: This project uses Node.js, Hardhat for Ethereum development, and npm for package management.
2) Smart Contract: The `simpleStorage.sol` contract provides basic storage functionality.
3) Frontend: The frontend is launched using npm scripts and runs on `localhost`.
