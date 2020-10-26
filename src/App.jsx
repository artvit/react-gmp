import qs from 'query-string';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MovieDetails from './components/MovieDetails/MovieDetails';
import MovieList from './components/MovieList/MovieList';
import NotFound from './components/NotFound/NotFound';
import Modals from './shared/Dialog/Modals';
import ErrorBoundary from './shared/ErrorBoundary';
import { openAddDialog, openDeleteDialog, openEditDialog } from './store';
import { moviesSelector } from './store/common-selectors';

const App = () => {
  const dispatch = useDispatch();
  const movies = useSelector(moviesSelector);

  const history = useHistory();
  const { searchQuery } = qs.parse(useLocation().search);
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
  const onGoToHome = useCallback(() => history.push('/'), [history]);

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
              searchQuery={searchQuery}
              onDelete={movie => dispatch(openDeleteDialog(movie))}
              onEdit={movie => dispatch(openEditDialog(movie))}
              onOpenDetails={onOpenDetails}
            />
          </ErrorBoundary>
        </Route>
        <Redirect from="/" to="/film" />
        <Route path="*">
          <NotFound onGoToHomeClick={onGoToHome} />
        </Route>
      </Switch>

      <Footer />

      <Modals />
    </>
  );
};

export default App;
