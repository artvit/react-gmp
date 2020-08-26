import React from 'react';
import styled from 'styled-components';

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

const Header = () => (
  <Background>
    <HeadingBlock>
      <div>Logo</div>
      <AddButton>+ Add movie</AddButton>
    </HeadingBlock>
    <SearchBlock>
      <SearchLabel>Find your movie</SearchLabel>
      <SearchInput placeholder="What do you want to watch?" />
      <SearchButton>Search</SearchButton>
    </SearchBlock>
  </Background>
);

export default Header;
