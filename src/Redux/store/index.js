import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {storage} from '../storage/Storage';
import {rootReducer} from '../reducers/index';

const persistConfig = {
  timeout: null,
  keyPrefix: '',
  key: 'root',
  storage: storage,
  blacklist: ['error', 'status', 'loader'],
};

export const store = createStore(
  persistReducer(persistConfig, rootReducer)
);

export const persistor = persistStore(store);