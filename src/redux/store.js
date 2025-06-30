import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from './tasks/slice';
import { filterReducer } from './filters/slice';

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        filters: filterReducer
    },
});