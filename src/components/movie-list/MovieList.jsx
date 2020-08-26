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
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-top: 20px;
  >* {
    margin-right: 50px;
    margin-bottom: 50px;
  }
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
