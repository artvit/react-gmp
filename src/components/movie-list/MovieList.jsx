import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Movie from './Movie/Movie';
import movieType from '../../types/movie';
import ControlPanel from './ControlPanel/ControlPanel';

const MoviesBox = styled.div`
  margin: 10px 70px;
`;

const Movies = styled.div`
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
    result = result.sort((m1, m2) => (m1[sortBy] < m2[sortBy] ? -1 : 1));
  }
  return result;
};

const MovieList = ({ movies }) => {
  const [sortBy, setSortBy] = useState();
  const [genre, setGenre] = useState();
  const filteredMovies = filterMovies(movies, genre, sortBy);
  return (
    <MoviesBox>
      <ControlPanel onFilterChange={setGenre} onSortChange={setSortBy} />
      <CountBox>
        <b>{filteredMovies.length}</b> movies found
      </CountBox>
      <Movies>{filteredMovies.map(m => (<Movie key={m.id} movie={m} />))}</Movies>
    </MoviesBox>
  );
};

MovieList.defaultProps = {
  movies: []
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(movieType)
};

export default MovieList;
