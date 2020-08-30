import React, { useCallback, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import movieType from '../../types/movie';
import ActionList from './ActionList';
import useClickOutside from '../shared/use-click-outside.effect';

const MovieBox = styled.div`
  width: 300px;
  color: lightgray;
  position: relative;
`;

const textEllipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Cover = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 450px;
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

const ActionBox = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const ActionButton = styled.button`
  display: block;
  height: 40px;
  width: 40px;
  font-size: 20px;
  background: rgba(0,0,0,0.6);
  color: white;
  border: 0;
  border-radius: 50%;
  visibility: hidden;

  ${MovieBox}:hover & {
    visibility: visible;
  }
`;

const Movie = ({ movie }) => {
  const [actionsOpened, setActionsOpened] = useState(false);
  const actionListRef = useRef(null);
  const closeOptions = useCallback(() => setActionsOpened(false), []);
  useClickOutside(actionListRef, closeOptions);
  return (
    <MovieBox>
      <ActionBox>
        {actionsOpened ? (
          <ActionList
            ref={actionListRef}
            onEdit={() => console.log('Edit')}
            onDelete={() => console.log('Delete')}
            onClose={closeOptions}
          />
        ) : (
          <ActionButton>
            <FontAwesomeIcon icon={faEllipsisV} onClick={() => setActionsOpened(true)} />
          </ActionButton>
        )}
      </ActionBox>
      <Cover src={movie.imgSrc} alt={movie.title} />
      <TitleBox>
        <Title>{movie.title}</Title>
        <Year>{movie.year}</Year>
      </TitleBox>
      <Genre>{movie.genre}</Genre>
    </MovieBox>
  );
};

Movie.propTypes = {
  movie: movieType.isRequired
};

export default Movie;
