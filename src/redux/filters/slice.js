import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    completed: null,
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCompletedFilter: (state, action) => {
            state.completed = action.payload;
        },
    },
    
});

export const filterReducer = filtersSlice.reducer;
export const { setCompletedFilter } = filtersSlice.actions;