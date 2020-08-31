import PropTypes from 'prop-types';

export const optionType = PropTypes.oneOf([
  PropTypes.shape({
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }),
  PropTypes.string
]);

export const optionArrayType = PropTypes.arrayOf(optionType);
