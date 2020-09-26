import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import genres from '../data/genres';
import movieReducer from './reducer';

const filters = ['All', ...genres.slice(0, 4)];
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
  editedMovie: null,
  isAddEditOpened: false,
  deletedMovie: null,
  selected: null
};

const store = createStore(movieReducer, initialState, applyMiddleware(thunk));

export default store;
