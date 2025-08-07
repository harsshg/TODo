import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // Add reducers here when needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
