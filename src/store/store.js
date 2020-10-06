import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import movieReducer from './reducer';

const filters = ['All'];
const sortByOptions = [{
  value: 'release_date',
  title: 'Released Date'
}, {
  value: 'title',
  title: 'Title'
}];

const initialState = {
  movies: [],
  filters,
  filterGenre: filters[0],
  sortByOptions,
  sortBy: sortByOptions[0].value,
  selected: null,
  editedMovie: null,
  isAddEditOpened: false,
  deletedMovie: null,
  resultDialogOpened: false,
  success: false,
  resultMessage: null
};

const store = createStore(movieReducer, initialState, applyMiddleware(thunk));

export default store;
