import { createSelector } from '@reduxjs/toolkit';

const filterMovies = (movies, genre, sortBy) => {
  let result = movies;
  if (genre && genre !== 'All') {
    result = result.filter(m => m.genres.includes(genre));
  }
  if (sortBy) {
    result = result.slice().sort((m1, m2) => {
      if (m1[sortBy] === m2[sortBy]) {
        return 0;
      }
      return m1[sortBy] < m2[sortBy] ? -1 : 1;
    });
  }
  return result;
};

export const moviesSelector = state => state.movies.data;
export const filterGenreSelector = state => state.movies.filterGenre;
export const sortBySelector = state => state.movies.sortBy;

export const filteredSortedMoviesSelector = createSelector(
  moviesSelector,
  filterGenreSelector,
  sortBySelector,
  filterMovies
);
