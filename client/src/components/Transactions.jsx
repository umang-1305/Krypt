import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div
      className="m-4 flex min-w-full flex-1
      flex-col
      rounded-md
      bg-[#181918]
      p-3
      hover:shadow-2xl
      sm:min-w-[270px] sm:max-w-[300px] 2xl:min-w-[450px] 2xl:max-w-[500px]"
    >
      <div className="mt-3 flex w-full flex-col items-center">
        <div className="display-flex mb-6 w-full justify-start p-2">
          <a
            href={`https://ropsten.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-base text-white">
              From: {shortenAddress(addressFrom)}
            </p>
          </a>
          <a
            href={`https://ropsten.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-base text-white">
              To: {shortenAddress(addressTo)}
            </p>
          </a>
          <p className="text-base text-white">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-base text-white">Message: {message}</p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt="nature"
          className="h-64 w-full rounded-md object-cover shadow-lg 2xl:h-96"
        />
        <div className="-mt-5 w-max rounded-3xl bg-black p-3 px-5 shadow-2xl">
          <p className="font-bold text-[#37c7da]">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="gradient-bg-transactions flex w-full items-center justify-center 2xl:px-20">
      <div className="flex flex-col py-12 px-4 md:p-12">
        {currentAccount ? (
          <h3 className="my-2 text-center text-3xl text-white">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="my-2 text-center text-3xl text-white">
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className="mt-10 flex flex-wrap items-center justify-center">
          {[...dummyData, ...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
