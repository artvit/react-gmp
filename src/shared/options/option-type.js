import PropTypes from 'prop-types';

export const optionType = PropTypes.oneOfType([
  PropTypes.shape({
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool
  }),
  PropTypes.string
]);

export const optionArrayType = PropTypes.arrayOf(optionType);
