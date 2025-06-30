import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors.js";

export const selectTasks = state => state.tasks.items;
export const selectLoading = state => state.tasks.loading;
export const selectError = state => state.tasks.error;
export const selectFilteredTasks = createSelector(
    [selectTasks, selectNameFilter], (tasks, filter) => {
        if(!filter) return tasks;
        return tasks.filter((task) => 
            task.name?.toLowerCase().includes(filter.toLowerCase()) ||
            task.number?.includes(filter)
        );
    }
);