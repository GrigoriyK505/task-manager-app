import { createSlice } from "@reduxjs/toolkit";
import { toggleCompleted } from "./operations";

const handlePending = (state) => {
    state.loading = true;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const slice = createSlice({
    name: 'toggle',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(toggleCompleted.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = state.items.map((task) =>
                    task.id === action.payload.id ? action.payload : task
                );
            })
            .addCase(toggleCompleted.pending, handlePending)
            .addCase(toggleCompleted.rejected, handleRejected);
    },
});

export const toggleReducer = slice.reducer;