import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Logo from '../../shared/layout/Logo';
import LogoBlock from '../../shared/layout/LogoBlock';
import Background from './Background';
import {
  AddButton,
  SearchBlock,
  SearchButton,
  SearchInput,
  SearchLabel
} from './Header.style';

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
