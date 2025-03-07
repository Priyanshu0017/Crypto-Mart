import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendingCoins } from '../features/coins/coinSlice'
import { Link } from 'react-router'

const TrendingCoins = () => {

    const dispatch = useDispatch()
    const {isLoading,isSuccess,isError, trendingCoins} = useSelector(state => state.coins)

    useEffect(() => {
        dispatch(getTrendingCoins())
    } , []) 

    if(isLoading){
        return <>
        <h2 className="text-xl font-semibold text-gray-500">Getting Trending Coins...</h2>
        <h2 className="text-xl font-semibold text-gray-500">Please wait...

        </h2>
        </>
    } 

  return (
    <>
      <div className="my-5 text-center w-4/5">
        <h2 className="text-xl font-semibold text-gray-500">Trending Coins</h2>
        <div className="my-2 flex items-center flex-wrap justify-center">
          {
            trendingCoins.map((coin,index) => {
                return <Link
                key={index}
                to={`/coin/${coin?.item?.id}`} className="py-1 px-2 text-sm font-semibold hover:bg-gray-600 duration-200 bg-gray-400 rounded-md m-1">
                {coin?.item?.name}
              </Link>
            }
                
              
            )
          }
          
        </div>
      </div>
    </>
  )
}

export default TrendingCoins
