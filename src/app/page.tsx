"use client";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
export default function Home() {
  const { open } = useWeb3Modal();
  const account = useAccount()
  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <button onClick={() => open()}>Connect Wallet</button>
    {account.address}
    </div>
  );
}
