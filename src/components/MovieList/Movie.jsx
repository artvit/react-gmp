import moment from 'moment';
import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import movieType from '../../types/movie';
import OptionSelector from '../../shared/options/OptionSelector';

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
  cursor: pointer;
`;

const TitleBox = styled.div`
  margin-top: 15px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Title = styled.div`
  flex: 0 1 auto;
  font-size: 20px;
  cursor: pointer;
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

const formatYear = date => moment(date, 'yyyy-mm-dd').get('year');

const Movie = ({
  movie, onDelete, onEdit, onOpenDetails
}) => {
  const actions = ['Edit', 'Delete'];
  const handleAction = action => {
    if (action === 'Edit') {
      onEdit(movie);
    } else if (action === 'Delete') {
      onDelete(movie);
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
      <Cover src={movie.poster_path} alt={movie.title} onClick={() => onOpenDetails(movie)} />
      <TitleBox>
        <Title onClick={() => onOpenDetails(movie)}>{movie.title}</Title>
        <Year>{formatYear(movie.release_date)}</Year>
      </TitleBox>
      <Genre>{movie.tagline}</Genre>
    </MovieBox>
  );
};

Movie.propTypes = {
  movie: movieType.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onOpenDetails: PropTypes.func.isRequired
};

export default Movie;
