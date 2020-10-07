import { configureStore } from '@reduxjs/toolkit';
import addEditDialogSlice from './add-edit-dialog-slice';
import deleteDialogSlice from './delete-dialog-slice';
import moviesSlice from './movies-slice';
import resultDialogSlice from './result-dialog-slice';

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    addEditDialog: addEditDialogSlice.reducer,
    deleteDialog: deleteDialogSlice.reducer,
    resultDialog: resultDialogSlice.reducer
  }
});

export default store;
