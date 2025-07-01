import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const toggleCompleted = createAsyncThunk('tasks/toggleCompleted', async (task, thunkAPI) => {
    try {
        const response = await axios.put(`/tasks/${task.id}`, {
            completed: !task.completed,
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}
)