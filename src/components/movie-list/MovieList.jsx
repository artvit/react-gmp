import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Movie from './Movie';
import movieType from '../../types/movie';
import ControlPanel from './ControlPanel';

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

const MovieList = ({ movies }) => (
  <MoviesBox>
    <ControlPanel />
    <CountBox>
      <b>{movies.length}</b> movies found
    </CountBox>
    <Movies>{movies.map(m => (<Movie key={m.title} movie={m} />))}</Movies>
  </MoviesBox>
);

MovieList.defaultProps = {
  movies: []
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(movieType)
};

export default MovieList;
