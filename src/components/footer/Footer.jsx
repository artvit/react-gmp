import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.div`
  padding: 10px;
  text-align: center;
  background: #555;
  color: #f65261;
  font-size: 20px;
`;

const Bold = styled.span`
  font-weight: 800;
`;

const Footer = () => (
  <FooterBox>
    <Bold>netflix</Bold>roulette
  </FooterBox>
);

export default Footer;
