import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthReducerState, LoginActionPayload } from './types';

const initialState: AuthReducerState = {
  isLoggedIn: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state: AuthReducerState,
      action: PayloadAction<LoginActionPayload>
    ) => {
      console.log(action);
      state.isLoggedIn = true;
    },
    logout: (state: AuthReducerState) => {
      state.isLoggedIn = false;
    },
  },
});

// export const { login, logout } = slice.actions;
export default slice.reducer;
