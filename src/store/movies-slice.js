import { createSlice } from '@reduxjs/toolkit';
import { createMovie, deleteMovie, editMovie, loadMovies } from './movie-thunks';

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
    }
  },
  extraReducers: {
    [loadMovies.fulfilled]: (state, action) => {
      state.data = action.payload.data;
    },
    [deleteMovie.fulfilled]: (state, action) => {
      state.data = state.data.filter(movie => movie.id !== action.payload);
    },
    [createMovie.fulfilled]: (state, action) => {
      state.data.push(action.payload);
    },
    [editMovie.fulfilled]: (state, action) => {
      const idx = state.data.findIndex(movie => movie.id === action.payload.id);
      state.data[idx] = action.payload;
    }
  }
});

export const { setFilterGenre, setSortBy, openDetails, closeDetails } = moviesSlice.actions;

export default moviesSlice;
