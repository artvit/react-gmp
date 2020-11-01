import PropTypes from 'prop-types';
import React from 'react';
import {
  CloseButton,
  CloseButtonBox,
  DialogPanel,
  Title,
} from './Dialog.style';

const Dialog = ({ title, children, onClose }) => (
  <DialogPanel>
    <CloseButtonBox><CloseButton onClick={onClose} /></CloseButtonBox>
    <Title>{title}</Title>
    {children}
  </DialogPanel>
);

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Dialog;
