import { createSlice } from '@reduxjs/toolkit';
import { loadMovies } from './movie-thunks';

const sortByOptions = [{
  value: 'release_date',
  title: 'Released Date'
}, {
  value: 'title',
  title: 'Title'
}];

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    data: [],
    selected: null,
    filterGenre: 'All',
    sortByOptions,
    sortBy: sortByOptions[0].value
  },
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setFilterGenre: (state, action) => {
      state.filterGenre = action.payload;
    },
    openDetails: (state, action) => {
      state.selected = action.payload;
    },
    closeDetails: state => {
      state.selected = null;
    }
  },
  extraReducers: {
    [loadMovies.fulfilled]: (state, action) => {
      state.data = action.payload.data;
    }
  }
});

export const {
  setFilterGenre, setSortBy, openDetails, closeDetails
} = moviesSlice.actions;

export default moviesSlice;
