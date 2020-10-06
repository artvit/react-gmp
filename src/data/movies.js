import axios from 'axios';

const SERVER_URL = 'http://localhost:4000';
const MOVIES_PATH = '/movies';

const fetchMovies = async searchText => {
  try {
    const response = await axios.get(`${SERVER_URL}${MOVIES_PATH}?limit=1000&search=${searchText}&searchBy=title`);
    return response.data;
  } catch (error) {
    throw error?.response || error;
  }
};

const createMovie = async movie => {
  try {
    const response = await axios.post(`${SERVER_URL}${MOVIES_PATH}`, movie);
    return response.data;
  } catch (error) {
    throw error?.response || error;
  }
};

const updateMovie = async movie => {
  try {
    const response = await axios.put(`${SERVER_URL}${MOVIES_PATH}`, movie);
    return response.data;
  } catch (error) {
    throw error?.response || error;
  }
};

const removeMovie = async id => {
  try {
    const response = await axios.delete(`${SERVER_URL}${MOVIES_PATH}/${id}`);
    return response.data;
  } catch (error) {
    throw error?.response || error;
  }
};

const MoviesAPI = {
  fetchMovies,
  createMovie,
  updateMovie,
  removeMovie
};

export default MoviesAPI;
