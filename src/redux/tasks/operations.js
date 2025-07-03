import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://task-manager-app-back-nuej.onrender.com",
});


export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const { completed } = state.filters;

      const params = {};
      if (completed !== null) params.completed = completed;

      const response = await api.get('/tasks', { params });
       console.log("fetchTasks response.data:", response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
    'tasks/addTask', 
    async(task, thunkAPI) => {
    try {
        const response = await api.post(`/tasks`, task);
        return response.data.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask', 
    async(id, thunkAPI) => {
    try {
        await api.delete(`/tasks/${id}`);
        return id;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const toggleCompleted = createAsyncThunk('tasks/toggleCompleted', async (task, thunkAPI) => {
    try {
        const response = await api.patch(`/tasks/${task._id}`, {
            completed: !task.completed,
        });
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (task, thunkAPI) => {
    try {
      const {_id, ...updatedFields} = task;
      const {data} = await api.patch(`/tasks/${_id}`, updatedFields);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);