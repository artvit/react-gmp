import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '../../shared/Dialog/Dialog';
import { BottomButtons, PrimaryButton } from '../../shared/Dialog/dialog-buttons';

const DeleteDialog = ({ onClose, onConfirm }) => (
  <Dialog title="Delete movie" onClose={onClose}>
    Are you sure you want to delete this movie?
    <BottomButtons>
      <PrimaryButton onClick={onConfirm}>Confirm</PrimaryButton>
    </BottomButtons>
  </Dialog>
);

DeleteDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default DeleteDialog;
