import { useState, useEffect } from "react";
import { ethers } from "ethers";
import simpleStorageAbi from "../artifacts/contracts/SimpleStorage.sol/SimpleStorage.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [simpleStorage, setSimpleStorage] = useState(undefined);
  const [storedValue, setStoredValue] = useState(undefined);
  const [inputValue, setInputValue] = useState("");

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const simpleStorageABI = simpleStorageAbi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const accounts = await ethWallet.request({ method: "eth_accounts" });
      handleAccount(accounts);
    }
  };

  const handleAccount = (accounts) => {
    if (accounts.length > 0) {
      console.log("Account connected: ", accounts[0]);
      setAccount(accounts[0]);
    } else {
      console.log("No account found");
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }

    const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
    handleAccount(accounts);
    getSimpleStorageContract();
  };

  const getSimpleStorageContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const simpleStorageContract = new ethers.Contract(contractAddress, simpleStorageABI, signer);

    setSimpleStorage(simpleStorageContract);
  };

  const getStoredValue = async () => {
    if (simpleStorage) {
      const value = await simpleStorage.get();
      setStoredValue(value.toNumber());
    }
  };

  const setStoredValueHandler = async () => {
    if (simpleStorage) {
      let tx = await simpleStorage.set(parseInt(inputValue));
      await tx.wait();
      getStoredValue();
    }
  };

  const incrementValue = async () => {
    if (simpleStorage) {
      let tx = await simpleStorage.increment();
      await tx.wait();
      getStoredValue();
    }
  };

  const initUser = () => {
    if (!ethWallet) {
      return <p>Please install MetaMask in order to use this application.</p>;
    }

    if (!account) {
      return <button onClick={connectAccount}>Please connect your MetaMask wallet</button>;
    }

    if (storedValue === undefined) {
      getStoredValue();
    }

    return (
      <div>
        <p>Your Account: {account}</p>
        <p>Stored Value: {storedValue}</p>
        <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={setStoredValueHandler}>Set Value</button>
        <button onClick={incrementValue}>Increment Value</button>
      </div>
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      <header><h1>Welcome to the Simple Storage DApp!</h1></header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center
        }
      `}
      </style>
    </main>
  );
}
