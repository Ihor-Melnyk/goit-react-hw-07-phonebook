import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filterSliceReducer from './filterSlice';
import itemsSliceReducer from './itemsSlice';

const rootReducer = combineReducers({
  items: itemsSliceReducer,
  filter: filterSliceReducer,
});

const persistConfig = {
  key: 'phoneBook',
  storage,
  blacklist: ['filter'],
};

export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
