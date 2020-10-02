import { useFormik } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../shared/Input';
import Dialog from '../../shared/Dialog/Dialog';
import { BottomButtons, Button, PrimaryButton } from '../../shared/Dialog/dialog-buttons';
import movieType from '../../types/movie';
import genres from '../../data/genres';

const defaultInitialValues = {
  id: '',
  title: '',
  released: '',
  runtime: '',
  url: '',
  genre: [],
  overview: ''
};

const movieToForm = movie => ({
  id: movie.id,
  title: movie.title,
  overview: movie.overview,
  released: movie.release_date,
  url: movie.poster_path,
  runtime: movie.runtime,
  genre: movie.genres
});

const formToMovie = form => {
  const movie = {
    title: form.title,
    overview: form.overview,
    release_date: form.released,
    poster_path: form.url,
    runtime: +form.runtime,
    genres: form.genre
  };
  if (form.id) {
    movie.id = form.id;
  }
  return movie;
};

const AddEditDialog = ({
  isEdit, onClose, onSave, movie
}) => {
  const initialValues = movie ? movieToForm(movie) : defaultInitialValues;
  const formik = useFormik({
    initialValues,
    onSubmit: v => onSave(formToMovie(v))
  });
  const reset = () => formik.resetForm();
  return (
    <Dialog title={isEdit ? 'Edit movie' : 'Add movie'} onClose={onClose}>
      <form onSubmit={formik.handleSubmit}>
        {isEdit
        && <Input title="Movie ID" value={formik.values.id} onChange={formik.setFieldValue} />}
        <Input
          name="title"
          title="Title"
          placeholder="Title here"
          value={formik.values.title}
          onChange={formik.setFieldValue}
        />
        <Input
          name="released"
          title="Release Date"
          placeholder="Select Date"
          type="date"
          value={formik.values.released}
          onChange={formik.setFieldValue}
        />
        <Input
          name="url"
          title="Movie URL"
          placeholder="Movie URL here"
          value={formik.values.url}
          onChange={formik.setFieldValue}
        />
        <Input
          name="genre"
          title="Genre"
          placeholder="Select Genre"
          type="multiselect"
          options={genres}
          value={formik.values.genre}
          onChange={formik.setFieldValue}
        />
        <Input
          name="overview"
          title="Overview"
          placeholder="Overview here"
          value={formik.values.overview}
          onChange={formik.setFieldValue}
        />
        <Input
          name="runtime"
          title="Runtime"
          placeholder="Runtime here"
          value={formik.values.runtime}
          onChange={formik.setFieldValue}
        />
        <BottomButtons>
          <Button type="button" onClick={reset}>Reset</Button>
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </BottomButtons>
      </form>
    </Dialog>
  );
};

AddEditDialog.defaultProps = {
  movie: {}
};

AddEditDialog.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  movie: (props, propName, componentName) => props.isEdit && PropTypes.checkPropTypes(
    { [propName]: movieType.isRequired }, props, propName, componentName
  ),
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default AddEditDialog;
