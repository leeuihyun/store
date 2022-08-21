import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: AllState = {
    logInLoading: false,
    logInDone: false,
    logInError: null,
    logOutLoading: false,
    logOutDone: false,
    logOutError: null,
    wishLoading: false,
    wishDone: false,
    wishError: null,
    cancelLoading: false,
    cancelDone: false,
    cancelError: null,
};
export const logIn = createAsyncThunk(
    "user",
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios;
        } catch (error) {
            console.log(error);
        }
    }
);
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {},
});
export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
