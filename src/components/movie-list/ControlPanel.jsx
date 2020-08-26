import React from 'react';
import styled from 'styled-components';

const ControlBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border-bottom: 2px solid #555;
`;

const Button = styled.button`
  color: white;
  background: none;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 20px;
  padding: 5px 15px 10px;
  margin-bottom: -2px;
  ${({ active }) => active && 'border-bottom: 2px solid #f65261;'}
`;

const Label = styled.span`  
  font-size: 20px;
  color: #555;
  text-transform: uppercase;
`;

const ControlPanel = () => (
  <ControlBox>
    <div>
      <Button active>All</Button>
      <Button>Documentary</Button>
      <Button>Comedy</Button>
      <Button>Horror</Button>
      <Button>Crime</Button>
    </div>
    <div>
      <Label>Sort by</Label>
      <Button>Release date</Button>
    </div>
  </ControlBox>
);

export default ControlPanel;
