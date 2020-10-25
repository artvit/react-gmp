import { filteredSortedMoviesSelector } from './common-selectors';

describe('common-selector', () => {
  describe('filteredSortedMoviesSelector', () => {
    test('should filter and sort', () => {
      const testState = {
        movies: {
          data: [{
            id: 1,
            title: 'b test 1',
            genres: ['Comedy', 'Drama']
          }, {
            id: 2,
            title: 'c test',
            genres: ['Comedy', 'Drama']
          }, {
            id: 3,
            title: 'a test 2',
            genres: ['Comedy', 'Drama']
          }, {
            id: 4,
            title: 'c test',
            genres: ['Comedy', 'Drama']
          }, {
            id: 5,
            title: 'c test',
            genres: ['Drama']
          }],
          filterGenre: 'Comedy',
          sortBy: 'title'
        }
      };
      const result = filteredSortedMoviesSelector(testState);
      expect(result.length).toBe(4);
      expect(result.map(m => m.id)).toEqual([3, 1, 2, 4]);
    });
  });
});
