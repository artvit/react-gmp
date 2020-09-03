import PropTypes from 'prop-types';

const movieType = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  shortDescription: PropTypes.string,
  description: PropTypes.string
});

export default movieType;
