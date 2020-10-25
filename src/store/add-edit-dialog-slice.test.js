import addEditDialogSlice from './add-edit-dialog-slice';
import { createMovie, editMovie } from './movie-thunks';

describe('addEditDialogSlice', () => {
  const { reducer, actions } = addEditDialogSlice;

  test('openAddDialog', () => {
    const resultState = reducer(
      {
        editedMovie: null,
        isAddEditOpened: false
      },
      actions.openAddDialog()
    );
    expect(resultState).toEqual({
      editedMovie: null,
      isAddEditOpened: true
    });
  });

  test('openEditDialog', () => {
    const testMovie = { id: 1, title: 'abc' };
    const resultState = reducer(
      {
        editedMovie: null,
        isAddEditOpened: false
      },
      actions.openEditDialog(testMovie)
    );
    expect(resultState).toEqual({
      editedMovie: testMovie,
      isAddEditOpened: true
    });
  });

  test('closeAddEditDialog', () => {
    const testMovie = { id: 1, title: 'abc' };
    const resultState = reducer(
      {
        editedMovie: testMovie,
        isAddEditOpened: true
      },
      actions.closeAddEditDialog()
    );
    expect(resultState).toEqual({
      editedMovie: null,
      isAddEditOpened: false
    });
  });

  test('createMovie.fulfilled', () => {
    const testMovie = { id: 1, title: 'abc' };
    const resultState = reducer(
      {
        editedMovie: testMovie,
        isAddEditOpened: true
      },
      createMovie.fulfilled()
    );
    expect(resultState).toEqual({
      editedMovie: null,
      isAddEditOpened: false
    });
  });

  test('editMovie.fulfilled', () => {
    const testMovie = { id: 1, title: 'abc' };
    const resultState = reducer(
      {
        editedMovie: testMovie,
        isAddEditOpened: true
      },
      editMovie.fulfilled()
    );
    expect(resultState).toEqual({
      editedMovie: null,
      isAddEditOpened: false
    });
  });
});
