import React from 'react';
import Dialog from '../common/Dialog';
import { BottomButtons, PrimaryButton } from '../common/dialog-buttons';

const DeleteDialog = () => (
  <Dialog title="Delete movie" onClose={() => console.log('Delete Close')}>
    Are you sure you want to delete this movie?
    <BottomButtons>
      <PrimaryButton>Confirm</PrimaryButton>
    </BottomButtons>
  </Dialog>
);

export default DeleteDialog;
