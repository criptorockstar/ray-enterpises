import { createSlice } from "@reduxjs/toolkit";

interface DrawerState {
  isOpen: boolean;
}

const initialState: DrawerState = {
  isOpen: false,
};

export const drawerSlice = createSlice({
  name: "drawerSlice",
  initialState,
  reducers: {
    toggleDrawer: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
