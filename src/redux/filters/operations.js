import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStatusFilters = createAsyncThunk('filters/fetchStatusFilters', async(_, thunkAPI) => {
    try {
        const res = await axios.get("/filters");
        return res.data.map(value => ({label: value, value}));
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});