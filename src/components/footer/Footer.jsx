import React from 'react';
import styled from 'styled-components';
import Logo from '../../shared/logo/Logo';

const FooterBox = styled.div`
  padding: 10px;
  text-align: center;
  background: #555;
  font-size: 20px;
`;

const Footer = () => (
  <FooterBox>
    <Logo />
  </FooterBox>
);

export default Footer;
