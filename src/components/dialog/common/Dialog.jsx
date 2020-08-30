import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DialogPanel = styled.div`
  backdrop-filter: blur(8px) brightness(1.2);
  padding: 20px 40px;
  background: #232323;
  color: white;
  width: 600px;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: 32px;
`;

const CloseButtonBox = styled.div`
  text-align: end;
`;

const CloseButton = styled.button`
  border: 0;
  font-size: 50px;
  background: transparent;
  color: white;
  
  &:after {
    font-weight: 100;
    content: "×";
  }
`;

const Dialog = ({ title, children, onClose }) => (
  <DialogPanel>
    <CloseButtonBox><CloseButton onClick={onClose} /></CloseButtonBox>
    <Title>{title}</Title>
    {children}
  </DialogPanel>
);

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Dialog;
