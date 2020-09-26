const SERVER_URL = 'http://localhost:4000';
const MOVIES_PATH = '/movies';

export const fetchMovies = async () => {
  const response = await fetch(`${SERVER_URL}${MOVIES_PATH}?limit=1000`);
  const body = await response.json();
  if (response.status !== 200) {
    throw body;
  }
  return body;
};
