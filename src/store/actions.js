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

export const loadMovies = movies => ({
  type: ActionTypes.LOAD_MOVIES,
  payload: movies
});

export const setFilterGenre = genre => ({
  type: ActionTypes.SET_FILTER_GENRE,
  payload: genre
});

export const setSortBy = sortBy => ({
  type: ActionTypes.SET_SORT_BY,
  payload: sortBy
});
