import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../shared/Input';
import Dialog from '../../shared/Dialog/Dialog';
import { BottomButtons, Button, PrimaryButton } from '../../shared/Dialog/dialog-buttons';
import movieType from '../../types/movie';
import genres from '../../data/genres';

const AddEditDialog = ({
  isEdit, onClose, onSave, movie
}) => (
  <Dialog title={isEdit ? 'Edit movie' : 'Add movie'} onClose={onClose}>
    {isEdit && <Input title="Movie ID" value={movie.id} />}
    <Input title="Title" placeholder="Title here" />
    <Input title="Release Date" placeholder="Select Date" type="date" />
    <Input title="Movie URL" placeholder="Movie URL here" />
    <Input title="Genre" placeholder="Select Genre" type="select" options={genres} />
    <Input title="Overview" placeholder="Overview here" />
    <Input title="Runtime" placeholder="Runtime here" />
    <BottomButtons>
      <Button>Reset</Button>
      <PrimaryButton onClick={onSave}>Submit</PrimaryButton>
    </BottomButtons>
  </Dialog>
);

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
