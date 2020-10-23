import { useFormik } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

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

const movieFormScheme = Yup.object().shape({
  id: Yup.number(),
  title: Yup.string()
    .required('Title is required'),
  released: Yup.date()
    .required('Release date is required'),
  runtime: Yup.number()
    .typeError('Runtime must be a number')
    // eslint-disable-next-line no-template-curly-in-string
    .min(0, 'Runtime must be at least ${min} minutes')
    // eslint-disable-next-line no-template-curly-in-string
    .max(500, 'Runtime must be below ${max} minutes')
    .required('Runtime is required'),
  url: Yup.string()
    .url('Should be a valid url')
    .required('Poster URL is required'),
  genre: Yup.array()
    .of(Yup.string().oneOf(genres))
    .min(1, 'At least one genre must be provided')
    .required('Genres are required'),
  overview: Yup.string()
    .required('Overview is required')
});

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

const AddEditDialog = ({ isEdit, onClose, onSave, movie }) => {
  const initialValues = isEdit ? movieToForm(movie) : defaultInitialValues;
  const formik = useFormik({
    initialValues,
    validationSchema: movieFormScheme,
    onSubmit: v => onSave(formToMovie(v))
  });
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
          touched={formik.touched.title}
          error={formik.errors.title}
          onChange={formik.setFieldValue}
        />
        <Input
          name="released"
          title="Release Date"
          placeholder="Select Date"
          type="date"
          value={formik.values.released}
          touched={formik.touched.released}
          error={formik.errors.released}
          onChange={formik.setFieldValue}
        />
        <Input
          name="url"
          title="Movie URL"
          placeholder="Movie URL here"
          value={formik.values.url}
          touched={formik.touched.url}
          error={formik.errors.url}
          onChange={formik.setFieldValue}
        />
        <Input
          name="genre"
          title="Genre"
          placeholder="Select Genre"
          type="multiselect"
          options={genres}
          value={formik.values.genre}
          touched={formik.touched.genre}
          error={formik.errors.genre}
          onChange={formik.setFieldValue}
        />
        <Input
          name="overview"
          title="Overview"
          placeholder="Overview here"
          value={formik.values.overview}
          touched={formik.touched.overview}
          error={formik.errors.overview}
          onChange={formik.setFieldValue}
        />
        <Input
          name="runtime"
          title="Runtime"
          placeholder="Runtime here"
          value={formik.values.runtime}
          touched={formik.touched.runtime}
          error={formik.errors.runtime}
          onChange={formik.setFieldValue}
        />
        <BottomButtons>
          <Button type="button" onClick={() => formik.resetForm()}>Reset</Button>
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
