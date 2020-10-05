import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '../../shared/Dialog/Dialog';

const ResultDialog = ({ success, message, onClose }) => (
  <Dialog title={success ? 'Congratulations!' : 'Error!'} onClose={onClose}>
    {message}
  </Dialog>
);

ResultDialog.propTypes = {
  success: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ResultDialog;
