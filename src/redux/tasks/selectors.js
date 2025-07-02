import { createSelector } from "@reduxjs/toolkit";
import { selectFilterName } from "../filters/selectors";

export const selectTasks = state => state.tasks.items;
export const selectLoading = state => state.tasks.loading;
export const selectError = state => state.tasks.error;
export const selectFilteredTasks = createSelector(
    [selectTasks, selectFilterName], (tasks, filter) => {
        if (!filter) return tasks;
        return tasks.filter((task) => 
            task.name?.toLowerCase().includes(filter.toLowerCase())
        );
    }
);