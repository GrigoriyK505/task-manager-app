import { createSlice } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTasks } from "./operations.js";

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const handlePending = (state) => {
    state.loading = true;
};

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const slice = createSlice({
    name: 'tasks',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchTasks.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(fetchTasks.pending, handlePending)
        .addCase(fetchTasks.rejected, handleRejected)
        .addCase(addTask.fulfilled, (state, action) => {
            state.items.push(action.payload);
            state.error = null;
            state.loading = false;
        })
        .addCase(addTask.pending, handlePending)
        .addCase(addTask.rejected, handleRejected)
        .addCase(deleteTask.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        })
        .addCase(deleteTask.pending, handlePending)
        .addCase(deleteTask.rejected, handleRejected)
    }
});

export const taskReducer = slice.reducer;