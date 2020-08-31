import styled from 'styled-components';

export const ControlBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border-bottom: 2px solid #555;
`;

export const Button = styled.button`
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

export const Label = styled.span`  
  font-size: 20px;
  color: #555;
  text-transform: uppercase;
`;
