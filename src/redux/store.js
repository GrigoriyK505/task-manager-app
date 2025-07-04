import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from './tasks/slice';
import { filterReducer } from './filters/slice';
import { persistStore } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filterReducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);