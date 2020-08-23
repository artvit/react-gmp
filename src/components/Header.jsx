import React from 'react';
import styled from 'styled-components';

const HeadingBlock = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 20px 35px;
  font-weight: bold;
`;

const Button = styled.button`
  border: 0;
  border-radius: 4px;
  padding: 10px 30px;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
`;

const AddButton = styled(Button)`
  background: rgba(255, 255, 255, 0.15);
  color: #f65261;
`;

const SearchBlock = styled.div`
  padding: 50px 150px;
  display: grid;
  grid-template-columns: auto 200px;
  grid-template-rows: auto 50px;
  grid-template-areas: 
    "label label"
    "input button";
  grid-gap: 10px;
`;

const SearchLabel = styled.h1`
  grid-area: label;
  font-weight: 300;
  font-size: 48px;
  text-transform: uppercase;
`;

const SearchInput = styled.input`
  grid-area: input;
  padding-left: 30px;
  background: rgba(255, 255, 255, 0.10);
  color: white;
  border: 0;
  border-radius: 4px;
`;

const SearchButton = styled(Button)`
  grid-area: button;
  background: #f65261;
  color: white;
`;

const Header = () => (
  <>
    <HeadingBlock>
      <div>Logo</div>
      <AddButton>+ Add movie</AddButton>
    </HeadingBlock>
    <SearchBlock>
      <SearchLabel>Find your movie</SearchLabel>
      <SearchInput placeholder="What do you want to watch?" />
      <SearchButton>Search</SearchButton>
    </SearchBlock>
  </>
);

export default Header;
