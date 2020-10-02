import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../../shared/layout/Logo';
import LogoBlock from '../../shared/layout/LogoBlock';

const BackgroundImg = styled.div`
  background-image: url("https://d1v224g40dbxxy.cloudfront.net/s3fs-public/banner-images/poster2_mobile_1.jpg?WeqzVGAT5VMelUiAwmnVDDCai3uqeGVM");
  background-size: cover;
`;

const Blur = styled.div`
  backdrop-filter: blur(8px) brightness(0.6);
`;

const Background = ({ children }) => (
  <BackgroundImg>
    <Blur>
      {children}
    </Blur>
  </BackgroundImg>
);

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
  padding: 0 150px 100px;
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
  background: rgba(50, 50, 50, 0.40);
  color: white;
  border: 0;
  border-radius: 4px;
`;

const SearchButton = styled(Button)`
  grid-area: button;
  background: #f65261;
  color: white;
`;

const Header = ({ onAddClick, onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const triggerSearch = () => onSearch(searchText);
  const onEnterPressed = event => {
    if (event.keyCode === 13) {
      triggerSearch();
    }
  };
  return (
    <Background>
      <LogoBlock>
        <Logo size="20px" />
        <AddButton onClick={onAddClick}>+ Add movie</AddButton>
      </LogoBlock>
      <SearchBlock>
        <SearchLabel>Find your movie</SearchLabel>
        <SearchInput
          placeholder="What do you want to watch?"
          onKeyDown={onEnterPressed}
          onChange={e => setSearchText(e.target.value)}
        />
        <SearchButton onClick={triggerSearch}>Search</SearchButton>
      </SearchBlock>
    </Background>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired
};

export default Header;
