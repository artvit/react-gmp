import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Movie from './Movie';
import movieType from '../../types/movie';
import ControlPanel from './ControlPanel/ControlPanel';
import { optionArrayType } from '../../shared/options/option-type';

const MoviesBox = styled.div`
  margin: 10px 70px;
`;

const MoviesLayout = styled.div`
  margin-top: 20px;
  display: grid;
  grid-gap: 50px 50px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const CountBox = styled.div`
  margin-top: 20px;
`;

const filterMovies = (movies, genre, sortBy) => {
  let result = movies;
  if (genre && genre !== 'All') {
    result = result.filter(m => m.genre === genre);
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

const MovieList = ({
  movies, filterGenres, sortByOptions, onEdit, onDelete, onOpenDetails
}) => {
  const [sortBy, setSortBy] = useState(sortByOptions[0].value);
  const [genre, setGenre] = useState(filterGenres[0]);
  const filteredMovies = filterMovies(movies, genre, sortBy);
  return (
    <MoviesBox>
      <ControlPanel
        selectedFilter={genre}
        selectedSortBy={sortBy}
        genreOptions={filterGenres}
        sortByOptions={sortByOptions}
        onFilterChange={setGenre}
        onSortChange={setSortBy}
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

MovieList.defaultProps = {
  movies: []
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(movieType),
  filterGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortByOptions: optionArrayType.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onOpenDetails: PropTypes.func.isRequired
};

export default MovieList;
