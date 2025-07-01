import { createSlice } from "@reduxjs/toolkit";
import { fetchStatusFilters } from "./operations.js";

const initialState = {
    name: "",
    status: 'all',
};

const slice = createSlice({
    name: 'filters',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchStatusFilters.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchStatusFilters.fulfilled, (state, action) => {
            state.loading = false;
            state.availableStatusFilters = action.payload;
        })
        .addCase(fetchStatusFilters.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
}});

export const { setStatusFilter, setNameFilter } = slice.actions;
export const filterReducer = slice.reducer;