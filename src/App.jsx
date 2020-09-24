import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import AddEditDialog from './components/dialog/AddEditDialog';
import DeleteDialog from './components/dialog/DeleteDialog';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MovieDetails from './components/MovieDetails/MovieDetails';
import MovieList from './components/MovieList/MovieList';
import ErrorBoundary from './shared/ErrorBoundary';
import {
  closeDeleteDialog,
  closeDetails,
  closeAddEditDialog,
  openDeleteDialog,
  openDetails,
  openEditDialog
} from './store';

Modal.setAppElement('#root');
Object.assign(Modal.defaultStyles.overlay, {
  backgroundColor: 'rgba(0,0,0,0.75)',
  backdropFilter: 'blur(5px)',
  height: '100vh'
});
Modal.defaultStyles.content = {
  position: 'relative',
  margin: 'auto',
  width: 'fit-content',
  height: '100%',
  overflow: 'auto',
  outline: 0
};

const editedMovieSelector = state => state.editedMovie;
const selectedSelector = state => state.selected;
const deletedSelector = state => state.deletedMovie;
const isAddEditOpenedSelector = state => state.isAddEditOpened;

const App = () => {
  const dispatch = useDispatch();
  const editedMovie = useSelector(editedMovieSelector);
  const deletedMovie = useSelector(deletedSelector);
  const selected = useSelector(selectedSelector);
  const isAddEditOpened = useSelector(isAddEditOpenedSelector);
  return (
    <>
      <ErrorBoundary>
        {selected ? (
          <MovieDetails
            movie={selected}
            onSearchClick={() => dispatch(closeDetails())}
          />
        ) : (
          <Header onAddClick={() => dispatch(openEditDialog(null))} />
        )}
      </ErrorBoundary>
      <ErrorBoundary>
        <MovieList
          onDelete={movie => dispatch(openDeleteDialog(movie))}
          onEdit={movie => dispatch(openEditDialog(movie))}
          onOpenDetails={movie => dispatch(openDetails(movie))}
        />
      </ErrorBoundary>
      <Footer />

      <Modal isOpen={isAddEditOpened}>
        <AddEditDialog
          isEdit={!!editedMovie}
          movie={editedMovie}
          onClose={() => dispatch(closeAddEditDialog())}
          onSave={m => console.log('save', m)}
        />
      </Modal>
      <Modal isOpen={!!deletedMovie}>
        <DeleteDialog
          onClose={() => dispatch(closeDeleteDialog())}
          onConfirm={() => console.log('delete', deletedMovie)}
        />
      </Modal>
    </>
  );
};

export default App;
