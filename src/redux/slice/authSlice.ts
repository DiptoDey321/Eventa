import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user:
    typeof window !== "undefined"
      ? localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")!)
        : null
      : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    forUserLoggedIn: (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(state.user));
    },

    forUserLoggedOut: (state) => {
      state.user = undefined;
    },
  },
});

export const { forUserLoggedIn, forUserLoggedOut } = authSlice.actions;

export default authSlice.reducer;
