import { createSlice } from '@reduxjs/toolkit';
import { deleteMovie } from './movie-thunks';

const deleteDialogSlice = createSlice({
  name: 'deleteDialog',
  initialState: { deletedMovie: null },
  reducers: {
    openDeleteDialog: (state, action) => {
      state.deletedMovie = action.payload;
    },
    closeDeleteDialog: state => {
      state.deletedMovie = null;
    }
  },
  extraReducers: {
    [deleteMovie.fulfilled]: state => {
      state.deletedMovie = null;
    }
  }
});

export const { openDeleteDialog, closeDeleteDialog } = deleteDialogSlice.actions;

export default deleteDialogSlice;
