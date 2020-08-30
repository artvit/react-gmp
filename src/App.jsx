import React from 'react';

import styled from 'styled-components';
import Header from './components/header/Header';
import MovieList from './components/movie-list/MovieList';
import ErrorBoundary from './components/shared/ErrorBoundary';
import Footer from './components/footer/Footer';
import AddEditDialog from './components/dialog/add-edit-dialog/AddEditDialog';

const PositionedDialog = styled(AddEditDialog)`
  position: fixed;
`;

const mockedMovies = new Array(4).fill({
  title: 'Pulp Fiction',
  imgSrc: 'https://www.miramax.com/media/assets/Pulp-Fiction1.png',
  genre: 'Action & Adventure',
  year: 1994
}).map((value, idx) => ({ ...value, id: idx }));
  // .concat(null);

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>
          <ErrorBoundary>
            <MovieList movies={mockedMovies} />
          </ErrorBoundary>

          <PositionedDialog />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
