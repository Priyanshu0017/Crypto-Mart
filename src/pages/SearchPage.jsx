import React, { useEffect } from "react";
import CoinCard from "../components/CoinCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { searchCoins } from "../features/coins/coinSlice";
import { Link } from "react-router";

const SearchPage = () => {
  let theme =true;
  const dispatch = useDispatch()
  const {searchquery} = useParams()

  const { coins, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.coins
  );


  useEffect(()=>{
    dispatch(searchCoins(searchquery))
  },[])

  if(isLoading){
    return ( <div
    className={
      theme
        ? "  py-16 px-8 md:px-16 bg-gray-900 min-h-[90vh]"
        : "  py-16 px-8 md:px-16 min-h-[90vh]"
    }
  >
    <h1 className="text-4xl text-center text-gray-600 my-4 font-black">
      Searching...
    </h1>
  </div>
  )}
  
  if(isError){
      return ( <div
        className={
            theme
            ? "  py-16 px-8 md:px-16 bg-gray-900 min-h-[90vh]"
            : "  py-16 px-8 md:px-16 min-h-[90vh]"
        }
        >
    <h1 className="text-4xl text-center text-red-500 my-4 font-black">
      Error Occured
    </h1>
  </div>
  )}
  
  if(coins.length === 0 ){
    return ( <div
    className={
      theme
        ? "  py-16 px-8 md:px-16 bg-gray-900 min-h-[90vh]"
        : "  py-16 px-8 md:px-16 min-h-[90vh]"
    }
  >
    <h1 className="text-4xl text-center text-gray-600 my-4 font-black">
      No Coins Found
    </h1>
  </div>
  )}
  return (
    <div
      className={
        theme
          ? "  py-16 px-8 md:px-16 bg-gray-900 min-h-[90vh]"
          : "  py-16 px-8 md:px-16 min-h-[90vh]"
      }
    >
      <h1 className="text-4xl text-center text-gray-400 my-4 font-black">
        Your Search
      </h1>

      <div className="my-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {coins.map((coin) => {
          return <CoinCard key={coin.id} coin={coin} />;
        })}
      </div>
    </div>
  );
};

export default SearchPage;
