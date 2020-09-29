import axios from 'axios';

const SERVER_URL = 'http://localhost:4000';
const MOVIES_PATH = '/movies';

export const fetchMovies = async () => {
  const response = await axios.get(`${SERVER_URL}${MOVIES_PATH}?limit=1000`);
  return response.data;
};

export const createMovie = async movie => {
  const response = await axios.post(`${SERVER_URL}${MOVIES_PATH}`, movie);
  return response.data;
};

export const updateMovie = async movie => {
  const response = await axios.put(`${SERVER_URL}${MOVIES_PATH}/${movie.id}`, movie);
  return response.data;
};

export const removeMovie = async id => {
  const response = await axios.delete(`${SERVER_URL}${MOVIES_PATH}/${id}`);
  return response.data;
};

const MoviesAPI = {
  fetchMovies,
  createMovie,
  updateMovie,
  removeMovie
};

export default MoviesAPI;
