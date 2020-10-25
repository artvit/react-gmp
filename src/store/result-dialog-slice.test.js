import { createMovie, deleteMovie, editMovie, loadMovies } from './movie-thunks';
import resultDialogSlice from './result-dialog-slice';

describe('resultDialogSlice', () => {
  const { reducer, actions } = resultDialogSlice;

  test('closeResultDialog', () => {
    const resultState = reducer({ resultDialogOpened: true }, actions.closeResultDialog());
    expect(resultState.resultDialogOpened).toBe(false);
  });

  test('createMovie.fulfilled', () => {
    const resultState = reducer({}, createMovie.fulfilled());
    expect(resultState).toEqual({
      resultDialogOpened: true,
      success: true,
      resultMessage: 'The movie has been added to database successfully'
    });
  });

  test('editMovie.fulfilled', () => {
    const resultState = reducer({}, editMovie.fulfilled());
    expect(resultState).toEqual({
      resultDialogOpened: true,
      success: true,
      resultMessage: 'The movie has been updated successfully'
    });
  });

  test('deleteMovie.fulfilled', () => {
    const resultState = reducer({}, deleteMovie.fulfilled());
    expect(resultState).toEqual({
      resultDialogOpened: true,
      success: true,
      resultMessage: 'The movie has been removed successfully'
    });
  });

  const errorMessage = 'Error';
  const error = new Error(errorMessage);

  test('createMovie.rejected', () => {
    const resultState = reducer({}, createMovie.rejected(error));
    expect(resultState).toEqual({
      resultDialogOpened: true,
      success: false,
      resultMessage: errorMessage
    });
  });

  test('editMovie.rejected', () => {
    const resultState = reducer({}, editMovie.rejected(error));
    expect(resultState).toEqual({
      resultDialogOpened: true,
      success: false,
      resultMessage: errorMessage
    });
  });

  test('deleteMovie.rejected', () => {
    const resultState = reducer({}, deleteMovie.rejected(error));
    expect(resultState).toEqual({
      resultDialogOpened: true,
      success: false,
      resultMessage: errorMessage
    });
  });

  test('loadMovies.rejected', () => {
    const resultState = reducer({}, loadMovies.rejected(error));
    expect(resultState).toEqual({
      resultDialogOpened: true,
      success: false,
      resultMessage: errorMessage
    });
  });
});
