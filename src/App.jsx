import React, { useCallback, useState } from 'react';
import Modal from 'react-modal';

import Header from './components/header/Header';
import MovieList from './components/MovieList/MovieList';
import ErrorBoundary from './shared/ErrorBoundary';
import Footer from './components/footer/Footer';
import AddEditDialog from './components/dialog/AddEditDialog';
import movies from './data/movies';
import genres from './data/genres';
import DeleteDialog from './components/dialog/DeleteDialog';
import MovieDetails from './components/MovieDetails/MovieDetails';

const mockedMovies = movies;
const filters = ['All', ...genres.slice(0, 4)];
const sortByOptions = [{
  value: 'released',
  title: 'Released Date'
}, {
  value: 'title',
  title: 'Title'
}];

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

const useOpenCloseDialog = (setOpened, setObject) => {
  const openDialog = useCallback(obj => {
    setOpened(true);
    setObject(obj);
  }, []);
  const closeDialog = useCallback(() => setOpened(false), []);
  return [openDialog, closeDialog];
};

const App = () => {
  const [isAddEditOpened, setIsAddEditOpened] = useState(false);
  const [editingMovie, setEditingMovie] = useState();
  const [isDeleteOpened, setIsDeleteOpened] = useState(false);
  const [deletingMovie, setDeletingMovie] = useState();
  const [isDetailsOpened, setIsDetailsOpened] = useState(false);
  const [movieDetails, setMovieDetails] = useState();

  const [openAddEdit, closeAddEdit] = useOpenCloseDialog(setIsAddEditOpened, setEditingMovie);
  const [openDelete, closeDelete] = useOpenCloseDialog(setIsDeleteOpened, setDeletingMovie);
  const [openDetails, closeDetails] = useOpenCloseDialog(setIsDetailsOpened, setMovieDetails);

  return (
    <>
      <ErrorBoundary>
        {isDetailsOpened ? (
          <MovieDetails
            movie={movieDetails}
            onSearchClick={closeDetails}
          />
        ) : (
          <Header onAddClick={() => openAddEdit(null)} />
        )}
      </ErrorBoundary>
      <ErrorBoundary>
        <MovieList
          movies={mockedMovies}
          onDelete={openDelete}
          onEdit={openAddEdit}
          onOpenDetails={openDetails}
          sortByOptions={sortByOptions}
          filterGenres={filters}
        />
      </ErrorBoundary>
      <Footer />

      <Modal isOpen={isAddEditOpened}>
        <AddEditDialog
          isEdit={!!editingMovie}
          movie={editingMovie}
          onClose={closeAddEdit}
          onSave={m => console.log('save', m)}
        />
      </Modal>
      <Modal isOpen={isDeleteOpened}>
        <DeleteDialog
          onClose={closeDelete}
          onConfirm={() => console.log('delete', deletingMovie)}
        />
      </Modal>
    </>
  );
};

export default App;
