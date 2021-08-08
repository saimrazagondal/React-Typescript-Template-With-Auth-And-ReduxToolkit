import { configureStore, combineReducers } from '@reduxjs/toolkit';
import allReducers from './slices';

const rootReducer = combineReducers(allReducers);

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export default store;
