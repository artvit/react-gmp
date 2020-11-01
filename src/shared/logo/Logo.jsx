import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LogoText = styled.span`
  color: #f65261;
  font-weight: 400;
  ${({ size }) => size && `
    font-size: ${size}
  `};
`;

const Bold = styled.span`
  font-weight: 800;
`;

const Logo = ({ size }) => (
  <LogoText size={size}>
    <Bold>netflix</Bold>roulette
  </LogoText>
);

Logo.defaultProps = {
  size: '',
};

Logo.propTypes = {
  size: PropTypes.string,
};

export default Logo;
