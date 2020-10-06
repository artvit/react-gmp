import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { setFilterGenre, setSortBy } from '../../store';
import ControlPanel from './ControlPanel/ControlPanel';
import Movie from './Movie';
import { CountBox, MoviesBox, MoviesLayout } from './MovieList.style';

const filterMovies = (movies, genre, sortBy) => {
  let result = movies;
  if (genre && genre !== 'All') {
    result = result.filter(m => m.genres.includes(genre));
  }
  if (sortBy) {
    result = result.sort((m1, m2) => {
      if (m1[sortBy] === m2[sortBy]) {
        return 0;
      }
      return m1[sortBy] < m2[sortBy] ? -1 : 1;
    });
  }
  return result;
};

const moviesSelector = state => state.movies;
const filterGenreSelector = state => state.filterGenre;
const sortBySelector = state => state.sortBy;

const filteredSortedMoviesSelector = createSelector(
  moviesSelector,
  filterGenreSelector,
  sortBySelector,
  filterMovies
);

const filterGenresSelector = state => state.filters;
const sortByOptionsSelector = state => state.sortByOptions;

const MovieList = ({ onEdit, onDelete, onOpenDetails }) => {
  const dispatch = useDispatch();
  const filteredMovies = useSelector(filteredSortedMoviesSelector);
  const filterGenres = useSelector(filterGenresSelector);
  const sortByOptions = useSelector(sortByOptionsSelector);
  const sortBy = useSelector(sortBySelector);
  const genre = useSelector(filterGenreSelector);

  return (
    <MoviesBox>
      <ControlPanel
        selectedFilter={genre}
        selectedSortBy={sortBy}
        genreOptions={filterGenres}
        sortByOptions={sortByOptions}
        onFilterChange={g => dispatch(setFilterGenre(g))}
        onSortChange={sb => dispatch(setSortBy(sb))}
      />
      <CountBox>
        <b>{filteredMovies.length}</b> movies found
      </CountBox>
      <MoviesLayout>
        {filteredMovies.map(m => (
          <Movie
            key={m.id}
            movie={m}
            onEdit={onEdit}
            onDelete={onDelete}
            onOpenDetails={onOpenDetails}
          />
        ))}
      </MoviesLayout>
    </MoviesBox>
  );
};

MovieList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onOpenDetails: PropTypes.func.isRequired
};

export default MovieList;
