import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {saveToken, saveUserData} from '../../utils/StorageUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AxiosInstance from '../../utils/AxiosInstance';

const initialState = {
  isLoading: false,
  loginData: [],
  logoutData: [],
  error: null,
};

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({data}, {rejectWithValue}) => {
    console.log(data, 'loginUser checking api call');
    try {
      const res = await AxiosInstance.post(`auth/login`, data);
      console.log(res.data.data.token,'tokennnn')
      await saveToken(res.data.data.token);
      await saveUserData(res.data.data.user);
      return res.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.log(errorMessage, 'error from loginUser');
      return rejectWithValue(errorMessage);
    }
  },
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, {rejectWithValue}) => {
    try {
      const res = await AxiosInstance.get(`auth/signout`, null);
      await AsyncStorage.clear();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearStore: state => {
      state.loginData = [];
      state.logoutData = [];
      state.error = null;
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
        state.loginData = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.logoutData = action.payload;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {clearStore} = userSlice.actions;

export default userSlice.reducer;

export const loginUserWithToken = (navigate, token) => async dispatch => {
  if (token) {
    // navigate("/ordersystem");
    console.log('token');
  } else {
    console.log('token is not available');
  }
};
