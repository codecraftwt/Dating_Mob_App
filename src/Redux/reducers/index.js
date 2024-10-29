import {combineReducers} from 'redux';
import userLoginReducer from '../slices/UserSlice';
import registrationSlice from '../slices/UserRegisterSlice';
import userProfile from '../slices/ProfileSlice';

export const rootReducer = combineReducers({
  userRegister: registrationSlice,
  user: userLoginReducer,
  profile: userProfile,
});
