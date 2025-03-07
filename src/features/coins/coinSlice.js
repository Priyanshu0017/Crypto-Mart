import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinService from "./coinService";

const coinSlice = createSlice({
  name: "Coins",
  initialState: {
    coins: [],
    trendingCoins: [],
    coin: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrendingCoins.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(getTrendingCoins.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.trendingCoins = action.payload;
    });
    builder.addCase(getTrendingCoins.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(searchCoins.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(searchCoins.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.coins = action.payload;
    });
    builder.addCase(searchCoins.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(searchCoin.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(searchCoin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.coin = action.payload;
    });
    builder.addCase(searchCoin.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export default coinSlice.reducer;

// GET trendinng coins
export const getTrendingCoins = createAsyncThunk(
  "GET/TRENDINGCOINS",
  async (_, thunkAPI) => {
    try {
      return await coinService.fetchTrendingCoins();
    } catch (error) {
      console.log(error);
    }
  }
);

//GET/COINS
export const searchCoins = createAsyncThunk(
  "SEARCH/COINS",
  async (query, thunkAPI) => {
    try {
      return await coinService.fetchCoins(query);
    } catch (error) {
      console.log(error);
    }
  }
);
//GET A SINGLE COIN
export const searchCoin = createAsyncThunk(
  "SEARCH/COIN",
  async (id, thunkAPI) => {
    try {
      return await coinService.fetchCoin(id);
    } catch (error) {
      console.log(error);
    }
  }
);
