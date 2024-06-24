import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlics";
import userReducer from "./userslice";

const myntraStore = configureStore({
  reducer: {
    user: userReducer,
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
