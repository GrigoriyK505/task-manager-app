import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = state => state.tasks.items;
export const selectFilterName = state => state.filters.name;

export const selectFilteredTasks = createSelector(
  [selectTasks, selectFilterName],
  (tasks, filterName) => {
    if (filterName === 'all') return tasks;

    if (filterName === 'complete') {
      return tasks.filter(task => task.taskType === 'complete');
    }

    if (filterName === 'incomplete') {
      return tasks.filter(task => task.taskType !== 'complete');
    }

    return tasks;
  }
);