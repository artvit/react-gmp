import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import AddEditDialog from './AddEditDialog';
import DeleteDialog from './DeleteDialog';
import ResultDialog from './ResultDialog';
import {
  closeAddEditDialog,
  closeDeleteDialog,
  closeResultDialog, createMovie,
  deleteMovie,
  editMovie,
} from '../../store';
import setupModal from '../../shared/Dialog/setup-modal';

setupModal();

const isAddEditOpenedSelector = (state) => state.addEditDialog.isAddEditOpened;
const editedMovieSelector = (state) => state.addEditDialog.editedMovie;
const deletedSelector = (state) => state.deleteDialog.deletedMovie;
const resultDialogOpenedSelector = (state) => state.resultDialog.resultDialogOpened;
const successSelector = (state) => state.resultDialog.success;
const resultMessageSelector = (state) => state.resultDialog.resultMessage;

const Modals = () => {
  const dispatch = useDispatch();
  const editedMovie = useSelector(editedMovieSelector);
  const deletedMovie = useSelector(deletedSelector);
  const isAddEditOpened = useSelector(isAddEditOpenedSelector);
  const resultDialogOpened = useSelector(resultDialogOpenedSelector);
  const success = useSelector(successSelector);
  const resultMessage = useSelector(resultMessageSelector);
  const saveMovie = (movie, isEdit) => dispatch(isEdit ? editMovie(movie) : createMovie(movie));
  return (
    <>
      <Modal isOpen={isAddEditOpened}>
        <AddEditDialog
          isEdit={!!editedMovie}
          movie={editedMovie}
          onClose={() => dispatch(closeAddEditDialog())}
          onSave={(m) => saveMovie(m, !!editedMovie)}
        />
      </Modal>
      <Modal isOpen={!!deletedMovie}>
        <DeleteDialog
          onClose={() => dispatch(closeDeleteDialog())}
          onConfirm={() => dispatch(deleteMovie(deletedMovie))}
        />
      </Modal>
      <Modal isOpen={resultDialogOpened}>
        <ResultDialog
          success={success}
          message={resultMessage}
          onClose={() => dispatch(closeResultDialog())}
        />
      </Modal>
    </>
  );
};

export default Modals;
