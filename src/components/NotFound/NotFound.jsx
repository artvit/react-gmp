import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../shared/Dialog/dialog-buttons';
import Logo from '../../shared/logo/Logo';
import LogoBlock from '../../shared/logo/LogoBlock';
import { ButtonBlock, NotFoundTextBox } from './NotFound.style';

const NotFound = () => {
  const history = useHistory();
  return (
    <>
      <LogoBlock><Logo size="20px" /></LogoBlock>
      <NotFoundTextBox>404</NotFoundTextBox>
      <ButtonBlock>
        <Button onClick={() => history.push('/')}>Go Back To Home</Button>
      </ButtonBlock>
    </>
  );
};

export default NotFound;
