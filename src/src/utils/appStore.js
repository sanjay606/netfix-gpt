import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies : moviesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // DevTools sirf development me enable
});

export default appStore;
