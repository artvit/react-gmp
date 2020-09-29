import { fetchMovies, removeMovie } from '../data/movies';
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
  payload: error
});

export const loadMovies = () => async dispatch => {
  try {
    const movies = await fetchMovies();
    dispatch(loadMoviesSuccess(movies));
  } catch (e) {
    dispatch(loadMoviesError(e));
  }
};

export const deleteMovieSuccess = movies => ({
  type: ActionTypes.LOAD_MOVIES_SUCCESS,
  payload: movies
});

export const deleteMovieError = error => ({
  type: ActionTypes.LOAD_MOVIES_ERROR,
  payload: error
});

export const deleteMovie = id => async dispatch => {
  try {
    const movies = await removeMovie(id);
    dispatch(deleteMovieSuccess(movies));
  } catch (e) {
    dispatch(deleteMovieError(e));
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
