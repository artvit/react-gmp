import { createMovie, deleteMovie, editMovie, loadMovies } from './movie-thunks';
import moviesSlice from './movies-slice';

describe('moviesSlice', () => {
  const { reducer, actions } = moviesSlice;

  it('setSortBy', () => {
    const resultState = reducer({ sortBy: null }, actions.setSortBy('release_date'));
    expect(resultState.sortBy).toBe('release_date');
  });

  it('setFilterGenre', () => {
    const resultState = reducer({ filterGenre: 'All' }, actions.setFilterGenre('Horror'));
    expect(resultState.filterGenre).toBe('Horror');
  });

  it('loadMovies.fulfilled', () => {
    const resultState = reducer({ data: [] }, loadMovies.fulfilled({
      data: [{
        id: 1,
        name: 'test'
      }]
    }));

    expect(resultState.data.length).toBe(1);
    expect(resultState.data).toContainEqual({
      id: 1,
      name: 'test'
    });
  });

  it('deleteMovie.fulfilled', () => {
    const resultState = reducer({ data: [{ id: 1, name: 'test' }] }, deleteMovie.fulfilled(1));

    expect(resultState.data).not.toContainEqual({
      id: 1,
      name: 'test'
    });
  });

  it('deleteMovie.fulfilled', () => {
    const resultState = reducer({ data: [{ id: 1, name: 'test' }] }, deleteMovie.fulfilled(1));

    expect(resultState.data).not.toContainEqual({
      id: 1,
      name: 'test'
    });
  });

  it('createMovie.fulfilled', () => {
    const resultState = reducer({ data: [] }, createMovie.fulfilled({
      id: 1,
      name: 'test'
    }));

    expect(resultState.data).toContainEqual({
      id: 1,
      name: 'test'
    });
  });

  it('editMovie.fulfilled', () => {
    const resultState = reducer({ data: [{ id: 1, name: 'test' }] }, editMovie.fulfilled({
      id: 1,
      name: 'test_new'
    }));

    expect(resultState.data).toContainEqual({
      id: 1,
      name: 'test_new'
    });
  });
});
