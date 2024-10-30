import {combineReducers} from 'redux';
import userLoginReducer from '../slices/UserSlice';
import registrationSlice from '../slices/UserRegisterSlice';
import userProfile from '../slices/ProfileSlice';
import visitors from '../slices/Visitors';

export const rootReducer = combineReducers({
  userRegister: registrationSlice,
  user: userLoginReducer,
  profile: userProfile,
  visitor:visitors,
});
