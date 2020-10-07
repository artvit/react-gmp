import { createSlice } from '@reduxjs/toolkit';
import { createMovie, editMovie } from './movie-thunks';

const closeDialog = state => {
  state.isAddEditOpened = false;
  state.editedMovie = null;
};

const addEditDialogSlice = createSlice({
  name: 'addEditDialog',
  initialState: {
    editedMovie: null,
    isAddEditOpened: false
  },
  reducers: {
    openAddDialog: state => {
      state.isAddEditOpened = true;
    },
    openEditDialog: (state, action) => {
      state.isAddEditOpened = true;
      state.editedMovie = action.payload;
    },
    closeAddEditDialog: closeDialog
  },
  extraReducers: {
    [createMovie.fulfilled]: closeDialog,
    [editMovie.fulfilled]: closeDialog
  }
});

export const {
  openAddDialog, openEditDialog, closeAddEditDialog
} = addEditDialogSlice.actions;

export default addEditDialogSlice;
