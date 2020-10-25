import deleteDialogSlice from './delete-dialog-slice';
import { deleteMovie } from './movie-thunks';

describe('deleteDialogSlice', () => {
  const { reducer, actions } = deleteDialogSlice;
  const testMovie = { id: 1, title: 'abc' };

  test('openDeleteDialog', () => {
    const resultState = reducer({ deletedMovie: null }, actions.openDeleteDialog(testMovie));
    expect(resultState).toEqual({ deletedMovie: testMovie });
  });

  test('closeDeleteDialog', () => {
    const resultState = reducer({ deletedMovie: testMovie }, actions.closeDeleteDialog());
    expect(resultState).toEqual({ deletedMovie: null });
  });

  test('deleteMovie.fulfilled', () => {
    const resultState = reducer({ deletedMovie: testMovie }, deleteMovie.fulfilled());
    expect(resultState).toEqual({ deletedMovie: null });
  });
});
