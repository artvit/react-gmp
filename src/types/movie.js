import PropTypes from 'prop-types';

const movieType = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  overview: PropTypes.string,
  poster_path: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  release_date: PropTypes.number.isRequired,
  vote_average: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired
});

export default movieType;
