import { UserType } from "@/types/userTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserType | any = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<UserType>) => action.payload,
    clearUser: () => null
  }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
