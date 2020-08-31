import React from 'react';
import Modal from 'react-modal';

import Header from './components/header/Header';
import MovieList from './components/MovieList/MovieList';
import ErrorBoundary from './shared/ErrorBoundary';
import Footer from './components/footer/Footer';
import AddEditDialog from './components/dialog/AddEditDialog';
import movies from './data/movies';
import genres from './data/genres';

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

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAddEditOpened: false };
  }

  closeAddEditDialog() {
    this.setState({ isAddEditOpened: false });
  }

  openAddDialog() {
    this.setState({ isAddEditOpened: true });
  }

  render() {
    const { isAddEditOpened } = this.state;
    return (
      <>
        <ErrorBoundary>
          <Header onAddClick={() => this.openAddDialog()} />
        </ErrorBoundary>
        <ErrorBoundary>
          <MovieList
            movies={mockedMovies}
            onDelete={m => console.log('Delete', m)}
            onEdit={m => console.log('Edit', m)}
            sortByOptions={sortByOptions}
            filterGenres={filters}
          />
        </ErrorBoundary>
        <Footer />

        <Modal isOpen={isAddEditOpened}>
          <AddEditDialog
            isEdit={false}
            onClose={() => this.closeAddEditDialog()}
            onSave={() => console.log('save')}
          />
        </Modal>
      </>
    );
  }
}

export default App;
