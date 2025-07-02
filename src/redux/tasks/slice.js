import { createSlice } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTasks, toggleCompleted } from "./operations.js";

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const handlePending = (state) => {
    state.loading = true;
};

const initialState = {
  items: [],
  meta: {
    page: 1,
    perPage: 10,
    totalItems: 0,
    totalPages: 1,
    hasNextPage: false,
    hasPreviousPage: false,
  },
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload.data ?? [];
        state.meta = action.payload.meta ?? state.meta;
        state.loading = false;
        state.error = null;
      })
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.rejected, handleRejected)
      .addCase(addTask.fulfilled, (state, action) => {
        if (!state.items) state.items = [];
        state.items.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(task => task._id !== action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(toggleCompleted.pending, handlePending)
      .addCase(toggleCompleted.rejected, handleRejected)
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        const updatedTask = action.payload.data ?? action.payload;
        state.items = state.items.map((task) =>
        task._id === updatedTask._id ? updatedTask : task
        );
        state.loading = false;
        state.error = null;
})

  },
});

export const taskReducer = tasksSlice.reducer;