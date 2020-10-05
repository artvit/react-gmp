import MoviesAPI from '../data/movies';
import ActionTypes from './action-types';

export const openAddDialog = () => ({
  type: ActionTypes.OPEN_ADD_DIALOG
});

export const openEditDialog = movie => ({
  type: ActionTypes.OPEN_EDIT_DIALOG,
  payload: movie
});

export const closeAddEditDialog = () => ({
  type: ActionTypes.CLOSE_ADD_EDIT_DIALOG
});

export const openDeleteDialog = movie => ({
  type: ActionTypes.OPEN_DELETE_DIALOG,
  payload: movie
});

export const closeDeleteDialog = () => ({
  type: ActionTypes.CLOSE_DELETE_DIALOG
});

export const openDetails = movie => ({
  type: ActionTypes.OPEN_DETAILS,
  payload: movie
});

export const closeDetails = () => ({
  type: ActionTypes.CLOSE_DETAILS
});

export const loadMoviesSuccess = movies => ({
  type: ActionTypes.LOAD_MOVIES_SUCCESS,
  payload: movies
});

export const loadMoviesError = error => ({
  type: ActionTypes.LOAD_MOVIES_ERROR,
  payload: error,
  error: true
});

export const loadMovies = searchText => async dispatch => {
  try {
    const movies = await MoviesAPI.fetchMovies(searchText);
    dispatch(loadMoviesSuccess(movies));
  } catch (e) {
    dispatch(loadMoviesError(e));
  }
};

export const setFilterGenre = genre => ({
  type: ActionTypes.SET_FILTER_GENRE,
  payload: genre
});

export const setSortBy = sortBy => ({
  type: ActionTypes.SET_SORT_BY,
  payload: sortBy
});

export const deleteMovieSuccess = movies => ({
  type: ActionTypes.DELETE_MOVIE_SUCCESS,
  payload: movies
});

export const deleteMovieError = error => ({
  type: ActionTypes.DELETE_MOVIE_ERROR,
  payload: error,
  error: true
});

export const deleteMovie = movie => async dispatch => {
  try {
    await MoviesAPI.removeMovie(movie.id);
    dispatch(deleteMovieSuccess(movie));
  } catch (e) {
    dispatch(deleteMovieError(e));
  }
};

export const createMovieSuccess = createdMovie => ({
  type: ActionTypes.CREATE_MOVIE_SUCCESS,
  payload: createdMovie
});

export const createMovieError = error => ({
  type: ActionTypes.CREATE_MOVIE_ERROR,
  payload: error,
  error: true
});

export const createMovie = movie => async dispatch => {
  try {
    const createdMovie = await MoviesAPI.createMovie(movie);
    dispatch(createMovieSuccess(createdMovie));
  } catch (e) {
    dispatch(createMovieError(e));
  }
};

export const editMovieSuccess = updatedMovie => ({
  type: ActionTypes.EDIT_MOVIE_SUCCESS,
  payload: updatedMovie
});

export const editMovieError = error => ({
  type: ActionTypes.EDIT_MOVIE_ERROR,
  payload: error,
  error: true
});

export const editMovie = movie => async dispatch => {
  try {
    const updatedMovie = await MoviesAPI.updateMovie(movie);
    dispatch(editMovieSuccess(updatedMovie));
  } catch (e) {
    dispatch(editMovieError(e));
  }
};

export const closeResultDialog = () => ({
  type: ActionTypes.CLOSE_RESULT_DIALOG
});
