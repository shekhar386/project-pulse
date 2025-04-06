import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  isUserLoggedIn: boolean;
}

const initialState: IAuthState = {
  isUserLoggedIn: false,
};

const authSlice = createSlice({
  name: "authReducer",
  initialState: initialState,
  reducers: {
    setSignInStatus: (state, action: PayloadAction<boolean>) => {
      state.isUserLoggedIn = action.payload;
    },
  },
});

const { actions, reducer } = authSlice;

export const { setSignInStatus } = actions;
export default reducer;
