# Web3 Modal Starter
![Screenshot from 2025-04-02 03-13-32](https://github.com/user-attachments/assets/8eda8cd7-ebbe-4941-ae33-91213eacfa4d)

![Screenshot from 2025-04-02 03-13-38](https://github.com/user-attachments/assets/0df9b81a-3df8-4f37-9f4b-85d52c6b52aa)

![Screenshot from 2025-04-02 03-13-47](https://github.com/user-attachments/assets/f4d95fa6-7413-4146-a0f7-d7a0ff2f3f46)

![Screenshot from 2025-04-02 03-13-54](https://github.com/user-attachments/assets/54ed2aee-3009-4060-b6c3-04a2cddd43fa)



This is a **Web3 Modal Starter** template that supports **Web3Modal**, **Wagmi**, **Viem**, and **WalletConnect** for seamless blockchain interactions.

## Features
- **Web3Modal** integration for easy wallet connections
- **Wagmi + Viem** for Ethereum interactions
- **WalletConnect** support
- **Local blockchain development with Anvil**

## Getting Started

### 1. Clone the Repository
```sh
git clone https://github.com/harshshukla9/web3-modal-starter.git
cd web3-modal-starter
```

### 2. Install Dependencies
```sh
npm install  # or yarn install
```

### 3. Configure Your Local Chain
Modify the **`config.ts`** file to export your **WagmiChain**:
```ts
export const config = defaultWagmiConfig({
  chains: [anvil], //anvil should be imported from wagmichains
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),

```
Make sure to **add this chain** in the `config.ts` for proper connection.

### 4. Running a Local Blockchain (Anvil)
For local development, use **Anvil** (a fast Ethereum node from Foundry):
```sh
anvil
```
Ensure that your **smart contracts are deployed** on Anvil to interact with them.

### 5. Start the Project
```sh
npm run dev  # or yarn dev
```

## Usage
- Connect to wallets via **Web3Modal**
- Interact with smart contracts using **Wagmi + Viem**
- Use Anvil for local development and transactions

## Contributing
Feel free to open issues and contribute to the project!

## License
MIT


