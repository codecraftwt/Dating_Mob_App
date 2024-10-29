// store/registrationSlice.js
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AxiosInstance from '../../utils/AxiosInstance'
import {saveToken} from '../../utils/StorageUtils';

const initialState = {
  isLoading: false,
  profileData: [],
  error: null,
};

export const userProfile = createAsyncThunk(
  'registration/userProfile',
  async (id, {rejectWithValue}) => {
    console.log(id,"idsddd")
    try {
      const res = await AxiosInstance.get(`user/${id}`);
      console.log(res, 'response from userProfile');
      return res;
    } catch (error) {
      console.log(error,'error')
      const errorMessage = error.response?.data?.message || error.message;
      return rejectWithValue(errorMessage);
    }
  },
);

const profileSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    clearRegistration: state => {
      state.data = [];
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(userProfile.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profileData = action.payload;
      })
      .addCase(userProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {setFields, clearRegistration} = profileSlice.actions;

export default profileSlice.reducer;
