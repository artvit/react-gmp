import React from 'react';

import Header from './components/header/Header';
import MovieList from './components/movie-list/MovieList';
import ErrorBoundary from './components/util/ErrorBoundary';
import Footer from './components/footer/Footer';
import AddDialog from './components/add-dialog/AddDialog';

const mockedMovies = new Array(4).fill({
  title: 'Pulp Fiction',
  imgSrc: 'https://www.miramax.com/media/assets/Pulp-Fiction1.png',
  genre: 'Action & Adventure',
  year: 1994
});
  // .concat(null);

const App = () => (
  <>
    <ErrorBoundary>
      <Header />
    </ErrorBoundary>
    <ErrorBoundary>
      <MovieList movies={mockedMovies} />
    </ErrorBoundary>
    <Footer />
    <AddDialog />
  </>
);

export default App;
