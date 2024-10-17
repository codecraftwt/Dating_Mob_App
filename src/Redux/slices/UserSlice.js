import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {baseURL} from '../../utils/api';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({data}, {rejectWithValue}) => {
    try {
      const res = await axios.post(`${baseURL}login`, {data});
      console.log(res, 'response from login api');
      return res.data; // Return the important part of the response
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.log(errorMessage, 'error from loginUser');
      return rejectWithValue(errorMessage); // Properly reject the error
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },
  reducers: {
    clearStore: state => {
      state.data = {};
      state.error = null; // Clear errors as well when clearing the store
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Capture the error message
      });
  },
});

export const {clearStore} = userSlice.actions;

export default userSlice.reducer;
