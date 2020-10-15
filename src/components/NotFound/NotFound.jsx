import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../shared/Dialog/dialog-buttons';

import Logo from '../../shared/logo/Logo';
import LogoBlock from '../../shared/logo/LogoBlock';

const NotFoundTextBox = styled.div`
  padding: 70px 0 30px;
  width: 100%;
  text-align: center;
  font-size: 200px;
`;

const ButtonBlock = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 100px;
`;

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
