import React from 'react';
import styled, { css } from 'styled-components';
import movieType from '../../types/movie';

const MovieBox = styled.div`
  width: 250px;
  color: lightgray;
`;

const textEllipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Cover = styled.img`
  display: block;
  object-fit: cover;
  width: 250px;
  height: 400px;
`;

const TitleBox = styled.div`
  margin-top: 15px;
  display: flex;
  flex-flow: row nowrap;
`;

const Title = styled.div`
  flex: 1 0 auto;
  font-size: 20px;
  ${textEllipsis}
`;

const Year = styled.div`
  flex: 0 0 80px;
  text-align: center;
  border: 1px solid lightgray;
  border-radius: 4px;
`;

const Genre = styled.div`
  margin-top: 10px;
  ${textEllipsis}
`;

const Movie = ({ movie }) => (
  <MovieBox>
    <Cover src={movie.imgSrc} alt={movie.title} />
    <TitleBox>
      <Title>{movie.title}</Title>
      <Year>{movie.year}</Year>
    </TitleBox>
    <Genre>{movie.genre}</Genre>
  </MovieBox>
);

Movie.propTypes = {
  movie: movieType.isRequired
};

export default Movie;
