import React from 'react';
import Modal from 'react-modal';

import Header from './components/header/Header';
import MovieList from './components/movie-list/MovieList';
import ErrorBoundary from './components/shared/ErrorBoundary';
import Footer from './components/footer/Footer';
import AddEditDialog from './components/dialog/add-edit-dialog/AddEditDialog';
import movies from './data/movies';

const mockedMovies = movies;

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
  paddingTop: '40px',
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
          <MovieList movies={mockedMovies} />
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
