import axios from 'axios';

const SERVER_URL = 'http://localhost:4000';
const MOVIES_PATH = '/movies';

const fetchMovies = async searchText => {
  const response = await axios.get(`${SERVER_URL}${MOVIES_PATH}?limit=1000&search=${searchText}&searchBy=title`);
  return response.data;
};

const createMovie = async movie => {
  const response = await axios.post(`${SERVER_URL}${MOVIES_PATH}`, movie);
  return response.data;
};

const updateMovie = async movie => {
  const response = await axios.put(`${SERVER_URL}${MOVIES_PATH}`, movie);
  return response.data;
};

const removeMovie = async id => {
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
