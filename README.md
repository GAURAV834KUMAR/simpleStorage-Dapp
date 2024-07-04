# simpleStorage-Dapp Project

Welcome to the simpleStorage-Dapp project! This repository contains a decentralized application (DApp) that interacts with the Ethereum blockchain using the `simpleStorage.sol` smart contract.

## Getting Started

### Installing

* Clone the repository from GitHub:
  ```bash
  git clone [YOUR_GITHUB_REPO_URL](https://github.com/GAURAV834KUMAR/simpleStorage-Dapp.git)
  ```
* Navigate to the project directory:
  ```bash
  cd simpleStorage-Dapp/
  ```
* Install the required dependencies:
  ```bash
  npm install
  ```
## Executing program

* Start Local Ethereum Node

Open a new terminal and run:
```bash
npx hardhat node
```
* Deploy Smart Contract

Open another terminal and run:
```bash
npx hardhat run --network localhost scripts/deploy.js
```
* Launch the Frontend

Back in the first terminal, start the frontend:
```bash
npm run dev
```
* Access Your Local DApp

Open your web browser and go to:
```bash
http://localhost:3000/
```
## Additional Information
1) Dependencies: This project uses Node.js, Hardhat for Ethereum development, and npm for package management.
2) Smart Contract: The `simpleStorage.sol` contract provides basic storage functionality.
3) Frontend: The frontend is launched using npm scripts and runs on `localhost`.

## Help

For common problems or issues, refer to the Hardhat documentation or run the following command for help:
```bash
npx hardhat help
```
## Authors

Gaurav  
[@GauravHandle](https://www.linkedin.com/in/gaurav-kumar-18151819b/)

## License
