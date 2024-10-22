import {combineReducers} from 'redux';
import userLoginReducer from '../slices/UserSlice';
import registrationSlice from '../slices/UserRegisterSlice';

export const rootReducer = combineReducers({
    user: userLoginReducer,
    userRegister:registrationSlice
});