import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MovieList from '../../components/MovieList/MovieList';
import { loadMovies, openAddDialog, openDeleteDialog, openEditDialog } from '../../store';
import { wrapper } from '../../store/store';

const FilmPage = () => {
  const router = useRouter();
  const { searchQuery } = router.query;
  const dispatch = useDispatch();
  const onSearch = useCallback(
    searchText => router.push(`/film?searchQuery=${searchText}`),
    [router]
  );
  const onOpenDetails = useCallback(movie => router.push({
    pathname: '/film/[movieId]',
    query: { ...router.query, movieId: movie.id }
  }, undefined, { shallow: true }), [router]);
  return (
    <>
      <Header
        onAddClick={() => dispatch(openAddDialog())}
        onSearch={onSearch}
      />
      <MovieList
        searchQuery={searchQuery}
        onDelete={movie => dispatch(openDeleteDialog(movie))}
        onEdit={movie => dispatch(openEditDialog(movie))}
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

export default FilmPage;
