import axios from "axios"

const fetchTrendingCoins = async () => {
    const responce = await axios.get('https://api.coingecko.com/api/v3/search/trending')
    return await responce.data.coins
}

const fetchCoins = async (query) => {
    const responce = await axios.get('https://api.coingecko.com/api/v3/search?query=' + query)
    const data = await responce.data.coins
    return data
}
const fetchCoin = async (id) => {
    const responce = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    const data = await responce.data
    return data
}


const coinService = { fetchTrendingCoins,fetchCoins,fetchCoin}
export default coinService