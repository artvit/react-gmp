import React from 'react';

import Header from './components/header/Header';
import MovieList from './components/movie-list/MovieList';

const mockedMovies = new Array(31).fill({
  title: 'Pulp Fiction',
  imgSrc: 'https://www.miramax.com/media/assets/Pulp-Fiction1.png',
  genre: 'Action & Adventure',
  year: 1994
});

const App = () => (
  <>
    <Header />
    <MovieList movies={mockedMovies} />
  </>
);

export default App;
