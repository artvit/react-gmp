import axios from 'axios';
import MoviesAPI from './movies';

jest.mock('axios');

const testMovie = { id: 1, title: 'test' };
const apiPathPrefix = 'http://localhost:4000/movies';

describe('MoviesAPI', () => {
  describe('fetchMovies', () => {
    test('should return fetched data', () => {
      axios.get.mockResolvedValue({ data: [testMovie] });
      expect(MoviesAPI.fetchMovies('test')).resolves.toEqual([testMovie]);
      expect(axios.get).toHaveBeenCalledWith(`${apiPathPrefix}?limit=100&search=test&searchBy=title`);
    });

    test('should throw error', () => {
      const error = { response: { messages: ['Error'] } };
      axios.get.mockRejectedValue(error);
      expect(MoviesAPI.fetchMovies('test')).rejects.toEqual(new Error('Error'));
    });
  });

  describe('createMovie', () => {
    test('should send post request ', () => {
      axios.post.mockResolvedValue({ data: testMovie });
      expect(MoviesAPI.createMovie(testMovie)).resolves.toEqual(testMovie);
      expect(axios.post).toHaveBeenCalledWith(apiPathPrefix, testMovie);
    });

    test('should throw error', () => {
      const error = { response: { messages: ['Error'] } };
      axios.post.mockRejectedValue(error);
      expect(MoviesAPI.createMovie('test')).rejects.toEqual(new Error('Error'));
    });
  });

  describe('updateMovie', () => {
    test('should send put request', () => {
      axios.put.mockResolvedValue({ data: testMovie });
      expect(MoviesAPI.updateMovie(testMovie)).resolves.toEqual(testMovie);
      expect(axios.put).toHaveBeenCalledWith(apiPathPrefix, testMovie);
    });

    test('should throw error', () => {
      const error = { response: { messages: ['Error'] } };
      axios.put.mockRejectedValue(error);
      expect(MoviesAPI.updateMovie('test')).rejects.toEqual(new Error('Error'));
    });
  });

  describe('removeMovie', () => {
    test('should send delete request', () => {
      axios.delete.mockResolvedValue({ data: '' });
      expect(MoviesAPI.removeMovie(testMovie.id)).resolves.toBeFalsy();
      expect(axios.delete).toHaveBeenCalledWith(`${apiPathPrefix}/${testMovie.id}`);
    });

    test('should throw error', () => {
      const error = { response: { messages: ['Error'] } };
      axios.delete.mockRejectedValue(error);
      expect(MoviesAPI.removeMovie('test')).rejects.toEqual(new Error('Error'));
    });
  });
});
