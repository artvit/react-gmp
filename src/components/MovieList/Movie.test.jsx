import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Movie from './Movie';

describe('Movie', () => {
  let onDelete;
  let onEdit;
  let onOpenDetails;

  const testMovie = {
    id: 1,
    title: 'Title',
    poster_path: 'http://localhost.com/123.jpg',
    genres: ['Comedy', 'Drama'],
    release_date: '2012-01-30',
    tagline: 'Tagline test',
  };

  beforeEach(() => {
    onDelete = jest.fn();
    onEdit = jest.fn();
    onOpenDetails = jest.fn();
  });

  test('should render', () => {
    const { baseElement } = render(
      <Movie
        movie={testMovie}
        onDelete={onDelete}
        onEdit={onEdit}
        onOpenDetails={onOpenDetails}
      />,
    );
    expect(baseElement).toBeInTheDocument();
  });

  test('should call onOpenDetails by click on title', () => {
    const { getByText } = render(
      <Movie
        movie={testMovie}
        onDelete={onDelete}
        onEdit={onEdit}
        onOpenDetails={onOpenDetails}
      />,
    );
    fireEvent.click(getByText(testMovie.title));
    expect(onOpenDetails).toHaveBeenCalled();
  });

  test('should call onOpenDetails by click on poster', () => {
    const { getByAltText } = render(
      <Movie
        movie={testMovie}
        onDelete={onDelete}
        onEdit={onEdit}
        onOpenDetails={onOpenDetails}
      />,
    );
    fireEvent.click(getByAltText(testMovie.title));
    expect(onOpenDetails).toHaveBeenCalled();
  });

  test('should call onDelete by click on action', () => {
    const { getByText, getByTestId } = render(
      <Movie
        movie={testMovie}
        onDelete={onDelete}
        onEdit={onEdit}
        onOpenDetails={onOpenDetails}
      />,
    );
    fireEvent.click(getByTestId('actionsButton'));
    fireEvent.click(getByText('Delete'));
    expect(onDelete).toHaveBeenCalled();
  });

  test('should call onEdit by click on action', () => {
    const { getByText, getByTestId } = render(
      <Movie
        movie={testMovie}
        onDelete={onDelete}
        onEdit={onEdit}
        onOpenDetails={onOpenDetails}
      />,
    );
    fireEvent.click(getByTestId('actionsButton'));
    fireEvent.click(getByText('Edit'));
    expect(onEdit).toHaveBeenCalled();
  });
});
