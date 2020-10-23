import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import AddEditDialog from './AddEditDialog';

jest.unmock('./AddEditDialog');

describe('AddEditDialog', () => {
  let onClose;
  let onSave;

  beforeEach(() => {
    onClose = jest.fn();
    onSave = jest.fn();
  });

  describe('create', () => {
    it('should render', () => {
      const { queryByText } = render(
        <AddEditDialog
          isEdit={false}
          onClose={onClose}
          onSave={onSave}
        />
      );
      expect(queryByText('Movie ID')).not.toBeInTheDocument();
    });

    it('should call onSave callback on submit button click', async done => {
      const { getByText, getByPlaceholderText } = render(
        <AddEditDialog
          isEdit={false}
          onClose={onClose}
          onSave={onSave}
        />
      );
      const submitButton = getByText('Submit');
      expect(submitButton).toBeInTheDocument();
      fireEvent.change(getByPlaceholderText(/Title/), { target: { value: 'Test Movie' } });
      fireEvent.change(getByPlaceholderText(/Date/), { target: { value: '2012-10-24' } });
      fireEvent.change(getByPlaceholderText(/URL/), { target: { value: 'http://localhost.com/123.jpg' } });
      fireEvent.click(getByPlaceholderText(/Genre/));
      fireEvent.click(getByText(/Animation/));
      fireEvent.change(getByPlaceholderText(/Overview/), { target: { value: 'overview' } });
      fireEvent.change(getByPlaceholderText(/Runtime/), { target: { value: '123' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(onSave).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('edit', () => {
    const movie = {
      id: 1,
      title: 'test movie',
      poster_path: 'http://localhost.com/123.jpg',
      genres: ['Comedy', 'Horror'],
      release_date: '2012-12-12',
      overview: 'overview',
      runtime: 123
    };

    it('should render to edit', () => {
      const { getByText } = render(<AddEditDialog
        isEdit
        movie={movie}
        onClose={onClose}
        onSave={onSave}
      />);
      expect(getByText('Movie ID')).toBeInTheDocument();
    });

    it('should call onSave callback on submit button click', async done => {
      const { getByText } = render(<AddEditDialog
        isEdit
        movie={movie}
        onClose={onClose}
        onSave={onSave}
      />);
      const submitButton = getByText('Submit');
      expect(submitButton).toBeInTheDocument();
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(onSave).toHaveBeenCalled();
        done();
      });
    });
  });
});
