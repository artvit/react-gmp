import { createSlice } from '@reduxjs/toolkit';
import { createMovie, deleteMovie, editMovie, loadMovies } from './movie-thunks';

const apiErrorReducer = (state, action) => {
  state.resultDialogOpened = true;
  state.success = false;
  state.resultMessage = action.error.message;
  // state.resultMessage = action.payload.messages.join('\n')
};

const apiSuccessReducer = message => state => {
  state.resultDialogOpened = true;
  state.success = true;
  state.resultMessage = message;
};

const resultDialogSlice = createSlice({
  name: 'resultDialog',
  initialState: {
    resultDialogOpened: false,
    success: false,
    resultMessage: null
  },
  reducers: {
    closeResultDialog: state => {
      state.resultDialogOpened = false;
    }
  },
  extraReducers: {
    [createMovie.fulfilled]: apiSuccessReducer('The movie has been added to database successfully'),
    [editMovie.fulfilled]: apiSuccessReducer('The movie has been updated successfully'),
    [deleteMovie.fulfilled]: apiSuccessReducer('The movie has been removed successfully'),
    [createMovie.rejected]: apiErrorReducer,
    [editMovie.rejected]: apiErrorReducer,
    [deleteMovie.rejected]: apiErrorReducer,
    [loadMovies.rejected]: apiErrorReducer
  }
});

export const { closeResultDialog } = resultDialogSlice.actions;

export default resultDialogSlice;
