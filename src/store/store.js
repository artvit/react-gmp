import { createStore } from 'redux';
import genres from '../data/genres';
import movieReducer from './reducer';

const filters = ['All', ...genres.slice(0, 4)];
const sortByOptions = [{
  value: 'released',
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
  deletedMovie: null,
  selected: null
};

const store = createStore(movieReducer, initialState);

export default store;
