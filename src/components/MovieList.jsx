import React from 'react';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => <div>{movies}</div>;

MovieList.defaultProps = {
  movies: []
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    imgSrc: PropTypes.string
  }))
};

export default MovieList;
