import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import addEditDialogSlice from './add-edit-dialog-slice';
import deleteDialogSlice from './delete-dialog-slice';
import moviesSlice from './movies-slice';
import resultDialogSlice from './result-dialog-slice';

const appReducer = combineReducers({
  movies: moviesSlice.reducer,
  addEditDialog: addEditDialogSlice.reducer,
  deleteDialog: deleteDialogSlice.reducer,
  resultDialog: resultDialogSlice.reducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return appReducer(state, action);
};

const initStore = () => configureStore({ reducer });

// eslint-disable-next-line import/no-mutable-exports
const store = initStore();

export const wrapper = createWrapper(initStore);

export default store;
