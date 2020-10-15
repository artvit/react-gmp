import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { setFilterGenre, setSortBy } from '../../store';
import ControlPanel from './ControlPanel/ControlPanel';
import Empty from './Empty';
import Movie from './Movie';
import { CountBox, MoviesBox, MoviesLayout } from './MovieList.style';

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

const moviesSelector = state => state.movies.data;
const filterGenreSelector = state => state.movies.filterGenre;
const sortBySelector = state => state.movies.sortBy;

const filteredSortedMoviesSelector = createSelector(
  moviesSelector,
  filterGenreSelector,
  sortBySelector,
  filterMovies
);

const filterGenresSelector = createSelector(
  moviesSelector,
  movies => ['All', ...Array.from(
    movies
      .map(m => m.genres)
      .flat()
      .reduce((set, genre) => set.add(genre), new Set())
  )]
);
const sortByOptionsSelector = state => state.movies.sortByOptions;

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
      {filteredMovies.length ? (
        <>
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
        </>
      ) : <Empty /> }
    </MoviesBox>
  );
};

MovieList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onOpenDetails: PropTypes.func.isRequired
};

export default MovieList;
