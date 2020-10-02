import styled from 'styled-components';

export const Button = styled.button`
  border: 0;
  border-radius: 4px;
  padding: 10px 30px;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
`;

export const AddButton = styled(Button)`
  background: rgba(255, 255, 255, 0.15);
  color: #f65261;
`;

export const SearchBlock = styled.div`
  padding: 0 150px 100px;
  display: grid;
  grid-template-columns: auto 200px;
  grid-template-rows: auto 50px;
  grid-template-areas: 
    "label label"
    "input button";
  grid-gap: 10px;
`;

export const SearchLabel = styled.h1`
  grid-area: label;
  font-weight: 300;
  font-size: 48px;
  text-transform: uppercase;
`;

export const SearchInput = styled.input`
  grid-area: input;
  padding-left: 30px;
  background: rgba(50, 50, 50, 0.40);
  color: white;
  border: 0;
  border-radius: 4px;
`;

export const SearchButton = styled(Button)`
  grid-area: button;
  background: #f65261;
  color: white;
`;
