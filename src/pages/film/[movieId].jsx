import { useRouter } from 'next/router';
import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/Footer/Footer';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieList from '../../components/MovieList/MovieList';
import { loadMovies, openDeleteDialog, openEditDialog } from '../../store';
import { moviesSelector } from '../../store/common-selectors';
import { wrapper } from '../../store/store';

const FilmDetailsPage = () => {
  const router = useRouter();
  const { searchQuery, movieId } = router.query;
  const dispatch = useDispatch();
  const movies = useSelector(moviesSelector);

  const onOpenDetails = useCallback((movie) => router.push({
    pathname: '/film/[movieId]',
    query: { ...router.query, movieId: movie.id },
  }, undefined, { shallow: true }), [router]);
  const onCloseDetails = useCallback(() => {
    const { movieId: _, ...newQuery } = router.query;
    return router.push({
      pathname: '/film',
      query: newQuery,
    });
  }, [router]);
  const movie = useMemo(() => movies?.find((m) => m.id === +movieId), [movies, movieId]);
  return (
    <>
      {movie && (
        <MovieDetails
          movie={movie}
          onSearchClick={onCloseDetails}
        />
      )}
      <MovieList
        searchQuery={searchQuery}
        onDelete={(m) => dispatch(openDeleteDialog(m))}
        onEdit={(m) => dispatch(openEditDialog(m))}
        onOpenDetails={onOpenDetails}
      />
      <Footer />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, query }) => {
  const { searchQuery } = query;
  await store.dispatch(loadMovies(searchQuery));
});

export default FilmDetailsPage;
