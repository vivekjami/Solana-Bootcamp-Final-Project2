# Solana-Bootcamp-Final-Project2 - README

Welcome to the **Solana-bootcamp-final-project2** project repository! This decentralized application (DApp) leverages blockchain technology to implement some actions on the Ethereum network. 

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Frontend](#frontend)
- [Contributing](#contributing)

## Overview

The **Budget Tracker** provides a user-friendly interface to participate in Ethereum-based actions.The purpose of this contract is to track the income and outcome of a given user. For this contract, we are going to target the Solana blockchain. Thus, we define the data structure **Record** that will be transpile to a PDA Account base on the seeds defined in the solana extension. In addition, the contract defines three methods, also known as instruction; through this method, we add behavior.
## Features

- create_user_record: To call once per account. Initialize a Record account. The total_balance of the account will be set to 0.

- register_income: Register income of the user.

- register_outcome: Register outcome of the user.


## Getting Started

Follow these steps to set up the project locally and start participating in this event.

### Prerequisites

1. Node.js: Ensure Node.js is installed. Download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

```bash
  git clone https://github.com/vivekjami/Solana-Bootcamp-Final-Project2.git
```

2. Navigate to the project directory:

```bash
  cd Solana-Bootcamp-Final-Project2
```

3. Install required npm packages:

```bash
 npm install
```

## Usage

1. Start the development server:

```bash
 npm start
```

2. Open your web browser and navigate to `http://localhost:3000` to access the DApp.

3. Connect your Ethereum wallet (e.g., MetaMask) to the DApp.

4. Browse ongoing auctions, place bids, and monitor your auction activity.


## Testing

Smart contract tests are located in the `test` folder. These tests ensure the correct functioning of the smart contract. To run the tests, follow these steps:

1. Open a terminal in the project directory.
2. Run the following command to execute the tests:

```bash
truffle test
```


## Contributing

Contributions to this project are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Make changes and test thoroughly.
4. Commit with clear and concise messages.
5. Push changes to your fork.
6. Submit a pull request describing your changes.



---

Thank you for your interest in the Web3 Auction DApp project! For questions or suggestions, reach out to us or open an issue on [GitHub](https://github.com/vivekjami/Solana-Bootcamp-Final-Project).  🚀
