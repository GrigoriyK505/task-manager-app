import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    status: 'all',
};

const slice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setStatusFilter: (state, action) => {
            state.status = action.payload;
        },
    },
});

export const { setStatusFilter } = slice.actions;
export const filterReducer = slice.reducer;