import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React from 'react';
import DateFormatters from '../../shared/date-formatters';
import Logo from '../../shared/layout/Logo';
import LogoBlock from '../../shared/layout/LogoBlock';
import movieType from '../../types/movie';
import {
  Background,
  Cover,
  DetailsLayout,
  DetailsText,
  Rating,
  SearchIcon,
  Title,
  TitleText,
  YearLengthBlock
} from './MovieDetails.style';

const MovieDetails = ({ movie, onSearchClick }) => (
  <Background>
    <LogoBlock>
      <Logo size="20px" />
      <SearchIcon icon={faSearch} onClick={onSearchClick} />
    </LogoBlock>
    <DetailsLayout>
      <Cover src={movie.poster_path} />
      <DetailsText>
        <Title>
          <TitleText>{movie.title}</TitleText>
          <Rating>{movie.vote_average}</Rating>
        </Title>
        <div>{movie.tagline}</div>
        <YearLengthBlock>
          <div>{DateFormatters.formatYear(movie.release_date)}</div>
          <div>{movie.runtime} min.</div>
        </YearLengthBlock>
        <div>{movie.overview}</div>
      </DetailsText>
    </DetailsLayout>
  </Background>
);

MovieDetails.propTypes = {
  movie: movieType.isRequired,
  onSearchClick: PropTypes.func.isRequired
};

export default MovieDetails;
