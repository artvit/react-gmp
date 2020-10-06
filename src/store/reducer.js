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
    case ActionTypes.LOAD_MOVIES_SUCCESS:
      return { ...state, movies: action.payload.data };
    case ActionTypes.SET_FILTER_GENRE:
      return { ...state, filterGenre: action.payload };
    case ActionTypes.SET_SORT_BY:
      return { ...state, sortBy: action.payload };
    case ActionTypes.DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        deletedMovie: null,
        resultDialogOpened: true,
        success: true,
        resultMessage: 'The movie has been removed successfully'
      };
    case ActionTypes.EDIT_MOVIE_SUCCESS:
      return {
        ...state,
        editedMovie: null,
        isAddEditOpened: false,
        selected: action.payload,
        resultDialogOpened: true,
        success: true,
        resultMessage: 'The movie has been updated successfully'
      };
    case ActionTypes.CREATE_MOVIE_SUCCESS:
      return {
        ...state,
        isAddEditOpened: false,
        selected: action.payload,
        resultDialogOpened: true,
        success: true,
        resultMessage: 'The movie has been added to database successfully'
      };
    case ActionTypes.CREATE_MOVIE_ERROR:
    case ActionTypes.EDIT_MOVIE_ERROR:
    case ActionTypes.DELETE_MOVIE_ERROR:
      return {
        ...state,
        deletedMovie: null,
        resultDialogOpened: true,
        success: false,
        resultMessage: action.payload.messages.join('\n')
      };
    case ActionTypes.CLOSE_RESULT_DIALOG:
      return {
        ...state,
        resultDialogOpened: false,
        resultMessage: null
      };
    default:
      return state;
  }
};

export default movieReducer;
