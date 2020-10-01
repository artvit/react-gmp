import React from 'react';
import styled from 'styled-components';

const TextValue = styled.div`
  font-size: 16px;
`;

const ReadonlyInputControl = ({ children }) => (
  <TextValue>{children}</TextValue>
);

export default ReadonlyInputControl;
