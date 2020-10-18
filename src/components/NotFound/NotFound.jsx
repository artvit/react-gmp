import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../shared/Dialog/dialog-buttons';
import Logo from '../../shared/logo/Logo';
import LogoBlock from '../../shared/logo/LogoBlock';
import { ButtonBlock, NotFoundTextBox } from './NotFound.style';

const NotFound = ({ onGoToHomeClick }) => (
  <>
    <LogoBlock><Logo size="20px" /></LogoBlock>
    <NotFoundTextBox>404</NotFoundTextBox>
    <ButtonBlock>
      <Button onClick={onGoToHomeClick}>Go Back To Home</Button>
    </ButtonBlock>
  </>
);

NotFound.propTypes = {
  onGoToHomeClick: PropTypes.func.isRequired
};

export default NotFound;
