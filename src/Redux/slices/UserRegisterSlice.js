// store/registrationSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from '../../utils/api';
import { saveToken } from '../../utils/StorageUtils';

const initialState = {
  isLoading: false,
  data: {
    profileFor:'',
    gender:'',
    firstName: '',
    lastName: '',
    dob:'',
    religion: '',
    motherTongue: '',
    country: '',
    username:'',
    email:'',
    mobile:'',
    password:'',
    confirmPassword:'',
  },
  error: null,
};

// Async action for registration
export const registerUser = createAsyncThunk(
  'registration/registerUser',
  async (registrationData, { rejectWithValue }) => {
    console.log(registrationData,'registrationData')
    try {
      const res = await axios.post(`${baseURL}signin`, registrationData);
      // await saveToken(res.data.data.token);
      console.log(res.data,"res")
      return res.data; // Adjust as per your API response
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setFields: (state, action) => {
      state.data = { ...state.data, ...action.payload }; 
    },
    clearRegistration: (state) => {
      state.data = initialState.data; 
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFields, clearRegistration } = registrationSlice.actions;

export default registrationSlice.reducer;

