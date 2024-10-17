import {combineReducers} from 'redux';
import userLoginReducer from '../slices/UserSlice'

export const rootReducer = combineReducers({
    user: userLoginReducer,
});