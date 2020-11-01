import { createAsyncThunk } from '@reduxjs/toolkit';
import MoviesAPI from '../data/movies';

export const loadMovies = createAsyncThunk(
  'movies/loadMovies',
  async (searchText) => MoviesAPI.fetchMovies(searchText),
);

export const createMovie = createAsyncThunk(
  'movies/createMovie',
  async (movie) => MoviesAPI.createMovie(movie),
);

export const editMovie = createAsyncThunk(
  'movies/editMovie',
  async (movie) => MoviesAPI.updateMovie(movie),
);

export const deleteMovie = createAsyncThunk(
  'movies/deleteMovie',
  async (movie) => {
    await MoviesAPI.removeMovie(movie.id);
    return movie.id;
  },
);
