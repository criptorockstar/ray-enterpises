import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import drawerReducer from "./drawerSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    drawer: drawerReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
