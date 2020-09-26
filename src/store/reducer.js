import ActionTypes from './action-types';

const movieReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.OPEN_ADD_DIALOG:
      return { ...state, isAddEditOpened: true };
    case ActionTypes.OPEN_EDIT_DIALOG:
      return { ...state, editedMovie: action.payload, isAddEditOpened: true };
    case ActionTypes.CLOSE_ADD_EDIT_DIALOG:
      return { ...state, editedMovie: null, isAddEditOpened: false };
    case ActionTypes.OPEN_DELETE_DIALOG:
      return { ...state, deletedMovie: action.payload };
    case ActionTypes.CLOSE_DELETE_DIALOG:
      return { ...state, deletedMovie: null };
    case ActionTypes.OPEN_DETAILS:
      return { ...state, selected: action.payload };
    case ActionTypes.CLOSE_DETAILS:
      return { ...state, selected: null };
    case ActionTypes.MOVIES_LOADED:
      return { ...state, movies: action.payload.data };
    case ActionTypes.SET_FILTER_GENRE:
      return { ...state, filterGenre: action.payload };
    case ActionTypes.SET_SORT_BY:
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
