import React from 'react';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddEditOpened: false,
      isDeleteOpened: false,
      isDetailsOpened: false
    };
  }

  closeAddEditDialog() {
    this.setState({ isAddEditOpened: false });
  }

  openAddEditDialog(movie) {
    this.setState({
      isAddEditOpened: true,
      editingMovie: movie
    });
  }

  closeDeleteDialog() {
    this.setState({ isDeleteOpened: false });
  }

  openDeleteDialog(movie) {
    this.setState({
      isDeleteOpened: true,
      deletingMovie: movie
    });
  }

  openDetails(movie) {
    this.setState({
      isDetailsOpened: true,
      movieDetails: movie
    });
  }

  closeDetails() {
    this.setState({
      isDetailsOpened: false
    });
  }

  render() {
    const {
      isAddEditOpened, editingMovie,
      isDeleteOpened, deletingMovie,
      isDetailsOpened, movieDetails
    } = this.state;
    return (
      <>
        <ErrorBoundary>
          {isDetailsOpened ? (
            <MovieDetails
              movie={movieDetails}
              onSearchClick={() => this.closeDetails()}
            />
          ) : (
            <Header onAddClick={() => this.openAddEditDialog()} />
          )}
        </ErrorBoundary>
        <ErrorBoundary>
          <MovieList
            movies={mockedMovies}
            onDelete={m => this.openDeleteDialog(m)}
            onEdit={m => this.openAddEditDialog(m)}
            onOpenDetails={m => this.openDetails(m)}
            sortByOptions={sortByOptions}
            filterGenres={filters}
          />
        </ErrorBoundary>
        <Footer />

        <Modal isOpen={isAddEditOpened}>
          <AddEditDialog
            isEdit={!!editingMovie}
            movie={editingMovie}
            onClose={() => this.closeAddEditDialog()}
            onSave={m => console.log('save', m)}
          />
        </Modal>
        <Modal isOpen={isDeleteOpened}>
          <DeleteDialog
            onClose={() => this.closeDeleteDialog()}
            onConfirm={() => console.log('delete', deletingMovie)}
          />
        </Modal>
      </>
    );
  }
}

export default App;
