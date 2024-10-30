// store/registrationSlice.js
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AxiosInstance from '../../utils/AxiosInstance';
import {saveToken} from '../../utils/StorageUtils';

const initialState = {
  isLoading: false,
  visitorsData: [],
  visitedData: [],
  error: null,
};

export const visitorsInfo = createAsyncThunk(
  'visitors/visitorsInfo',
  async (id, {rejectWithValue}) => {
    console.log(id, 'idsddd');
    try {
      const res = await AxiosInstance.get(`visitors/${id}`);
      console.log(res, 'response from userProfile');
      return res.data;
    } catch (error) {
      console.log(error, 'error');
      const errorMessage = error.response?.data?.message || error.message;
      return rejectWithValue(errorMessage);
    }
  },
);

export const visitedInfo = createAsyncThunk(
  'visitors/visitedInfo',
  async ({payload}, {rejectWithValue}) => {
    console.log(id, 'id from editUserProfile');
    console.log(payload, 'payload from editUserProfile');
    try {
      const res = await AxiosInstance.put(`visitors/${id}`, payload);
      return res;
    } catch (error) {
      console.log(error, 'error');
      const errorMessage = error.response?.data?.message || error.message;
      return rejectWithValue(errorMessage);
    }
  },
);

const visitorSlice = createSlice({
  name: 'visitors',
  initialState,
  reducers: {
    clearStore: state => {
      state.visitorsData = [];
      state.visitedData = [];
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(visitorsInfo.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(visitorsInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.visitorsData = action.payload;
      })
      .addCase(visitorsInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(visitedInfo.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(visitedInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.visitedData = action.payload;
      })
      .addCase(visitedInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {clearStore} = visitorSlice.actions;

export default visitorSlice.reducer;
