import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import movieType from '../../types/movie';
import LogoBlock from '../../shared/layout/LogoBlock';
import Logo from '../../shared/layout/Logo';

const Background = styled.div`
  background: black;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #f65261;
`;

const DetailsLayout = styled.div`
  padding: 25px 40px 40px;
  display: flex;
  flex-flow: row nowrap;
`;

const DetailsText = styled.div`
  margin-left: 60px;
  flex-grow: 1;
`;

const Cover = styled.img`
  display: block;
  flex-grow: 0;
  object-fit: cover;
  height: 400px;
`;

const Title = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  font-size: 48px;
`;

const Rating = styled.div`
  margin-left: 20px;
  display: inline-block;
  height: 50px;
  width: 50px;
  font-size: 20px;
  border: 1px solid white;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  line-height: 45px;
`;

const YearLengthBlock = styled.div`
  display: flex;
  margin: 20px 0;
  flex-flow: row nowrap;
  color: #f65261;
  font-size: 18px;
  >* {
    margin-right: 30px;
  }
`;

const MovieDetails = ({ movie, onSearchClick }) => (
  <Background>
    <LogoBlock>
      <Logo size="20px" />
      <SearchIcon icon={faSearch} onClick={onSearchClick} />
    </LogoBlock>
    <DetailsLayout>
      <Cover src={movie.imgSrc} />
      <DetailsText>
        <Title>{movie.title} <Rating>{movie.rate}</Rating></Title>
        <div>{movie.shortDescription}</div>
        <YearLengthBlock>
          <div>{movie.released}</div>
          <div>{movie.length} min.</div>
        </YearLengthBlock>
        <div>{movie.description}</div>
      </DetailsText>
    </DetailsLayout>
  </Background>
);

MovieDetails.propTypes = {
  movie: movieType.isRequired,
  onSearchClick: PropTypes.func.isRequired
};

export default MovieDetails;
