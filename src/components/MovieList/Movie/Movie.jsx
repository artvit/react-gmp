import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import movieType from '../../../types/movie';
import OptionSelector from '../../../shared/options/OptionSelector';

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

const Movie = ({ movie, onDelete, onEdit }) => {
  const actions = ['Edit', 'Delete'];
  const handleAction = action => {
    if (action === 'Edit') {
      onEdit();
    } else if (action === 'Delete') {
      onDelete();
    }
  };
  return (
    <MovieBox>
      <ActionBox>
        <OptionSelector
          onChange={handleAction}
          options={actions}
          hideChildren
          showCloseButton
          positionRight
        >
          <ActionButton>
            <FontAwesomeIcon icon={faEllipsisV} />
          </ActionButton>
        </OptionSelector>
      </ActionBox>
      <Cover src={movie.imgSrc} alt={movie.title} />
      <TitleBox>
        <Title>{movie.title}</Title>
        <Year>{movie.released}</Year>
      </TitleBox>
      <Genre>{movie.genre}</Genre>
    </MovieBox>
  );
};

Movie.propTypes = {
  movie: movieType.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default Movie;