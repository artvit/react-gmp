import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import AddEditDialog from './components/dialog/AddEditDialog';
import DeleteDialog from './components/dialog/DeleteDialog';
import ResultDialog from './components/dialog/ResultDialog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MovieDetails from './components/MovieDetails/MovieDetails';
import MovieList from './components/MovieList/MovieList';
import NotFound from './components/NotFound/NotFound';
import ErrorBoundary from './shared/ErrorBoundary';
import {
  closeAddEditDialog,
  closeDeleteDialog,
  closeDetails, closeResultDialog,
  createMovie,
  deleteMovie,
  editMovie,
  loadMovies,
  openAddDialog,
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

const selectedSelector = state => state.movies.selected;
const isAddEditOpenedSelector = state => state.addEditDialog.isAddEditOpened;
const editedMovieSelector = state => state.addEditDialog.editedMovie;
const deletedSelector = state => state.deleteDialog.deletedMovie;
const resultDialogOpenedSelector = state => state.resultDialog.resultDialogOpened;
const successSelector = state => state.resultDialog.success;
const resultMessageSelector = state => state.resultDialog.resultMessage;

const App = () => {
  const dispatch = useDispatch();
  const editedMovie = useSelector(editedMovieSelector);
  const deletedMovie = useSelector(deletedSelector);
  const selected = useSelector(selectedSelector);
  const isAddEditOpened = useSelector(isAddEditOpenedSelector);
  const resultDialogOpened = useSelector(resultDialogOpenedSelector);
  const success = useSelector(successSelector);
  const resultMessage = useSelector(resultMessageSelector);
  const saveMovie = (movie, isEdit) => dispatch(isEdit ? editMovie(movie) : createMovie(movie));
  return (
    <>
      <NotFound />
      <ErrorBoundary>
        {selected ? (
          <MovieDetails
            movie={selected}
            onSearchClick={() => dispatch(closeDetails())}
          />
        ) : (
          <Header
            onAddClick={() => dispatch(openAddDialog())}
            onSearch={searchText => dispatch(loadMovies(searchText))}
          />
        )}
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
          onSave={m => saveMovie(m, !!editedMovie)}
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

export default App;
