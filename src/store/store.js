import { configureStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import addEditDialogSlice from './add-edit-dialog-slice';
import deleteDialogSlice from './delete-dialog-slice';
import moviesSlice from './movies-slice';
import resultDialogSlice from './result-dialog-slice';

const defaultOptions = {
  reducer: {
    movies: moviesSlice.reducer,
    addEditDialog: addEditDialogSlice.reducer,
    deleteDialog: deleteDialogSlice.reducer,
    resultDialog: resultDialogSlice.reducer
  }
};

// eslint-disable-next-line import/no-mutable-exports
let store = configureStore(defaultOptions);

export const initStore = initState => configureStore({
  ...defaultOptions,
  preloadedState: initState
});

export const initializeStore = preloadedState => {
  let tStore = store || initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    tStore = initStore({
      ...store.getState(),
      ...preloadedState
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') {
    return tStore;
  }
  // Create the store once in the client
  if (!store) {
    store = tStore;
  }

  return tStore;
};

export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}

export default store;
