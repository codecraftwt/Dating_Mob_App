import { createSlice } from '@reduxjs/toolkit';

//   'user/loginUser',
//   async (data) => {
//     try {
//       const res = await axios.post(`${baseURL}login`, data);
//       await saveToken(res.data.access_token); 
//       return res;
//     } catch (error) {
//       const errorMessage = error.response?.data.message || error.message;
//       Toast.show({
//         type: 'error',
//         text1: errorMessage,
//         position: 'bottom',
//       });
//       return errorMessage;
//     }
//   }
// );

// export const logoutUser = createAsyncThunk(
//   'user/logoutUser',
//   async () => {
//     try {
//       const res = await axiosInstance.post('logout', {});
//       await removeToken(); 
//       return res;
//     } catch (error) {
//       return rejectWithValue(error.response?.data.message || error.message);
//     }
//   }
// );

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    data: {},
  },
  reducers: {
    clearStore: (state) => {
      state.data = {};
    },
  }
});

export const { clearStore } = userSlice.actions;

export default userSlice.reducer;
