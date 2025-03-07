import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: userExist || null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.user = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(logOutUser.fulfilled, (state, action) => {
      state.message = "";
      state.user = null;
    });
    builder.addCase(logInUser.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.user = action.payload;
    });
    builder.addCase(logInUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export default authSlice.reducer;

// REGISTER USER
export const registerUser = createAsyncThunk(
  "AUTH/REGISTER",
  async (formdata, thunkAPI) => {
    try {
      return await authService.register(formdata);
    } catch (error) {
      const message = await error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// LOGOUT USER
export const logOutUser = createAsyncThunk("AUTH/LOGOUT", async () => {
  localStorage.removeItem("user");
});

// LOGIN USER
export const logInUser = createAsyncThunk(
  "AUTH/LOGIN",
  async (formdata, thunkAPI) => {
    try {
      return await authService.login(formdata);
    } catch (error) {
      const message = await error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
