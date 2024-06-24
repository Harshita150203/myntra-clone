import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
    token: localStorage.getItem("token") || null,
    isLoggedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.user = "";
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
});

export const { setUser, setToken, logout } = userSlice.actions;

export default userSlice.reducer;
