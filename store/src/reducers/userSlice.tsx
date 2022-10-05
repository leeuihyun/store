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
    wishData: [],
    cancelLoading: false,
    cancelDone: false,
    cancelError: null,
    getDataLoading: false,
    getDataDone: false,
    getDataError: null,
    data: null,
};
export const logIn = createAsyncThunk(
    "logIn",
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios;
        } catch (error) {
            console.log(error);
        }
    }
);
export const getData = createAsyncThunk("getData", async () => {
    try {
        const url = `/v1/search/shop.json`;
        const res = await axios.get(url, {
            params: {
                query: "향수",
                display: 100,
            },
            headers: {
                "X-Naver-Client-Id": `eXLSdjS_rWMbvWtV5IAN`,
                "X-Naver-Client-Secret": `XlMpKxqWdC`,
                "Content-Type": "plain/text",
            },
        });
        return res.data.items;
    } catch (error) {
        console.error(error);
    }
});
export const wish = createAsyncThunk("wish", async (data: number) => {
    try {
        const res = await axios.get(
            `https://fakestoreapi.com/products/${data}`
        );
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error(error);
    }
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [logIn.pending.type]: (state, action: PayloadAction<string>) => {
            state.logInLoading = true;
            state.logInDone = false;
            state.logInError = null;
        },
        [logIn.fulfilled.type]: (state, action: PayloadAction<string>) => {
            state.logInLoading = false;
            state.logInDone = true;
            state.logInError = null;
        },
        [logIn.rejected.type]: (state, action: PayloadAction<string>) => {
            state.logInLoading = false;
            state.logInDone = false;
            state.logInError = action.payload;
        },
        [wish.pending.type]: (state, action: PayloadAction<object>) => {
            state.wishLoading = true;
            state.wishDone = false;
            state.wishError = null;
        },
        [wish.fulfilled.type]: (state, action: PayloadAction<object>) => {
            state.wishLoading = false;
            state.wishDone = true;
            state.wishError = null;
            state.wishData = state.wishData.concat(action.payload);
        },
        [wish.rejected.type]: (state, action: PayloadAction<object>) => {
            state.wishLoading = false;
            state.wishDone = false;
            state.wishError = action.payload;
        },
        [getData.pending.type]: (state, action: PayloadAction<object>) => {
            state.getDataLoading = true;
            state.getDataDone = false;
            state.getDataError = null;
            state.data = null;
        },
        [getData.fulfilled.type]: (state, action: PayloadAction<object>) => {
            state.getDataLoading = false;
            state.getDataDone = true;
            state.getDataError = null;
            state.data = action.payload;
        },
        [getData.rejected.type]: (state, action: PayloadAction<object>) => {
            state.getDataLoading = false;
            state.getDataDone = false;
            state.getDataError = action.payload;
        },
    },
});
export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
