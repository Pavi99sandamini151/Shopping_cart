import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
    error: null,
}

export const productFetch = createAsyncThunk(
    "products/productsFetch",
    async (id=null, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:5000/products");
            return response?.data;
        } catch(error) {
            return rejectWithValue("An error occcured");
        }  
    }
)

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [productFetch.pending]: (state, action) => {
            state.status = "pending"
        },
        [productFetch.fulfilled]: (state, action) => {
            state.status = "success";
            state.items = action.payload;
        },
        [productFetch.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
    },
});

export default productSlice.reducer;