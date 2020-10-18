import PropTypes from 'prop-types';
import qs from 'query-string';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { createSelector } from 'reselect';
import { loadMovies, setFilterGenre, setSortBy } from '../../store';
import {
  filteredSortedMoviesSelector, filterGenreSelector,
  moviesSelector,
  sortBySelector
} from '../../store/common-selectors';
import ControlPanel from './ControlPanel/ControlPanel';
import Empty from './Empty';
import Movie from './Movie';
import { CountBox, MoviesBox, MoviesLayout } from './MovieList.style';

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
  const { searchQuery } = qs.parse(useLocation().search);
  const dispatch = useDispatch();
  const filteredMovies = useSelector(filteredSortedMoviesSelector);
  const filterGenres = useSelector(filterGenresSelector);
  const sortByOptions = useSelector(sortByOptionsSelector);
  const sortBy = useSelector(sortBySelector);
  const genre = useSelector(filterGenreSelector);
  useEffect(() => {
    if (searchQuery !== undefined) {
      dispatch(loadMovies(searchQuery));
    }
  }, [searchQuery]);

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
