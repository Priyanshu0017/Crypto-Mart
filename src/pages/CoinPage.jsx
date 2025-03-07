import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { searchCoin } from "../features/coins/coinSlice";
import { addToCart } from "../features/cart/cartSlice";
import Loading from "../components/Loading";

const CoinPage = () => {
  const {theme} = useSelector(state => state.theme)
  const dispatch = useDispatch();
  const { coin, isLoading, isError, isSuccess } = useSelector((state) => state.coins);

  const { id } = useParams();

  useEffect(() => {
    dispatch(searchCoin(id));
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <Loading/>
    );
  }

  if (isError) {
    return (
      <div
        className={
          theme
            ? "py-16 px-8 md:px-16 bg-gray-900 min-h-[90vh]"
            : "py-16 px-8 md:px-16 min-h-[90vh]"
        }
      >
        <h1 className="text-4xl text-center text-red-500 my-4 font-black">
          Error Occurred
        </h1>
      </div>
    );
  }

  if (!isSuccess || !coin) {
    return null; // or some fallback UI
  }
  return (
    <div
      className={
        theme
          ? "py-16 px-8 md:px-16 bg-gray-900 min-h-[90vh]"
          : "py-16 px-8 md:px-16 min-h-[90vh]"
      }
    >
      <div className="border border-gray-800 rounded-md p-5">
        <div className="flex md:flex-row flex-col items-center md:space-x-10">
          <img className="h-52 my-3" src={coin?.image?.large} alt={coin?.name} />
          <div className="text-center md:text-left mx-10">
            <h1 className="text-gray-600 my-2 text-3xl font-bold">{coin?.name}</h1>
            <h1 className="text-gray-600 my-2 text-2xl uppercase font-bold">{coin?.symbol}</h1>
            <h1 className="text-green-600 my-2 text-3xl font-bold">
              Price: {coin?.market_data?.current_price?.inr} INR/-
            </h1>
            <button onClick={() => dispatch(addToCart(coin))} className="bg-green-600 my-2 text-white w-full md:w-1/2 text-sm font-bold px-5 py-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="mt-16 text-gray-600" dangerouslySetInnerHTML={{ __html: coin?.description?.en }}></div>
        <div className="w-full md:w-1/5  bg-blue-500 p-1 flex justify-center rounded-md my-3">
        <a href={coin?.links?.homepage} target="_blank" rel="noopener noreferrer" className="text-white font-bold">
          Official Website
        </a>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;