import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./drawerSlice";

const store = configureStore({
  reducer: {
    drawer: drawerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
