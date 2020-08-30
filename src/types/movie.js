import PropTypes from 'prop-types';

const movieType = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
});

export default movieType;
