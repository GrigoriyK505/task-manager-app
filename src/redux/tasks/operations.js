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

export const addTasks = createAsyncThunk('tasks/addTask', async(body, thunkAPI) => {
    try {
        const {data} = await axios.post(`/tasks`, body);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async(id, thunkAPI) => {
    try {
        const {data} = await axios.delete(`/tasks/${id}`);
        return data.id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

