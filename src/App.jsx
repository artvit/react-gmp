import React, { useCallback } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

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
  closeResultDialog,
  createMovie,
  deleteMovie,
  editMovie,
  openAddDialog,
  openDeleteDialog,
  openEditDialog
} from './store';
import { moviesSelector } from './store/common-selectors';

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
  const movies = useSelector(moviesSelector);
  const isAddEditOpened = useSelector(isAddEditOpenedSelector);
  const resultDialogOpened = useSelector(resultDialogOpenedSelector);
  const success = useSelector(successSelector);
  const resultMessage = useSelector(resultMessageSelector);
  const saveMovie = (movie, isEdit) => dispatch(isEdit ? editMovie(movie) : createMovie(movie));
  const history = useHistory();

  const onSearch = useCallback(searchText => history.push({
    pathname: '/film',
    search: `?searchQuery=${searchText}`
  }), [history]);
  const onOpenDetails = useCallback(movie => history.push({
    pathname: `/film/${movie.id}`,
    search: history.location.search
  }), [history]);
  const onCloseDetails = useCallback(() => history.push({
    pathname: '/film',
    search: history.location.search
  }), [history]);

  return (
    <>
      <Switch>
        <Route path="/film">
          <ErrorBoundary>
            <Switch>
              <Route
                path="/film/:movieId"
                render={({ match }) => {
                  const movie = movies?.find(m => m.id === +match.params.movieId);
                  return (
                    <>
                      {movie && (
                        <MovieDetails
                          movie={movie}
                          onSearchClick={onCloseDetails}
                        />
                      )}
                    </>
                  );
                }}
              />
              <Route path="/film">
                <Header
                  onAddClick={() => dispatch(openAddDialog())}
                  onSearch={onSearch}
                />
              </Route>
            </Switch>
            <MovieList
              onDelete={movie => dispatch(openDeleteDialog(movie))}
              onEdit={movie => dispatch(openEditDialog(movie))}
              onOpenDetails={onOpenDetails}
            />
          </ErrorBoundary>
        </Route>
        <Redirect from="/" to="/film" />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

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
