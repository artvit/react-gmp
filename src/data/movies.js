import axios from 'axios';

const SERVER_URL = 'http://localhost:4000';
const MOVIES_PATH = '/movies';

const wrapError = (error) => (error?.response?.messages ? new Error(error.response.messages.join('\n')) : error);

const fetchMovies = async (searchText) => {
  try {
    const response = await axios.get(`${SERVER_URL}${MOVIES_PATH}?limit=100&search=${searchText}&searchBy=title`);
    return response.data;
  } catch (error) {
    throw wrapError(error);
  }
};

const createMovie = async (movie) => {
  try {
    const response = await axios.post(`${SERVER_URL}${MOVIES_PATH}`, movie);
    return response.data;
  } catch (error) {
    throw wrapError(error);
  }
};

const updateMovie = async (movie) => {
  try {
    const response = await axios.put(`${SERVER_URL}${MOVIES_PATH}`, movie);
    return response.data;
  } catch (error) {
    throw wrapError(error);
  }
};

const removeMovie = async (id) => {
  try {
    const response = await axios.delete(`${SERVER_URL}${MOVIES_PATH}/${id}`);
    return response.data;
  } catch (error) {
    throw wrapError(error);
  }
};

const MoviesAPI = {
  fetchMovies,
  createMovie,
  updateMovie,
  removeMovie,
};

export default MoviesAPI;
