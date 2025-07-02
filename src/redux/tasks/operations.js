import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://task-manager-app-back-nuej.onrender.com';

export const fetchTasks = createAsyncThunk('tasks/fetchAll', async(_, thunkAPI) => {
    try {
        const {data} = await axios.get(`/tasks`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addTask = createAsyncThunk('tasks/addTask', async(taskData, thunkAPI) => {
    try {
        const response = await axios.post(`/tasks`, taskData);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async(id, thunkAPI) => {
    try {
        await axios.delete(`/tasks/${id}`);
        return {id};
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

