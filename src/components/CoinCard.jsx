import React from "react";
import { Link } from "react-router";

const CoinCard = ({ coin }) => {
  return (
    <div className="p-4 border rounded-md border-gray-600 flex flex-col items-center">
      <img className="h-24 my-3" src={coin?.large} alt="" />
      <h1 className={coin?.name?.length >25 ?"text-lg my-2 text-gray-600 font-bold" :"text-2xl my-2 text-gray-600 font-bold" }>{coin.name}</h1>
      <h2 className="text-2xl my-2 text-gray-600 font-bold">
        Symbol: {coin?.symbol}
      </h2>
      <Link to={`/coin/${coin?.id}`} className="py-2 text-center text-white px-4 bg-green-500 rounded-md hover:bg-green-700 duration-200 w-2/4 my-2 text-sm font-bold">
        View Coin
      </Link>
    </div>
  );
};

export default CoinCard;
