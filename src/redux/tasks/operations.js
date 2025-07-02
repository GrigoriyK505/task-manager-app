import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://task-manager-app-back-nuej.onrender.com';

export const fetchTasks = createAsyncThunk('tasks/fetchAll', async(_, thunkAPI) => {
    try {
        const {data} = await axios.get(`/tasks`);
        const {data: tasks, ...meta} = data;
        return {tasks, meta};
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addTask = createAsyncThunk('tasks/addTask', async(task, thunkAPI) => {
    try {
        const response = await axios.post(`/tasks`, task);
        return response.data.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async(id, thunkAPI) => {
    try {
        await axios.delete(`/tasks/${id}`);
        return id;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const toggleCompleted = createAsyncThunk('tasks/toggleCompleted', async (task, thunkAPI) => {
    try {
        const response = await axios.put(`/tasks/${task.id}`, {
            completed: !task.completed,
        });
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});