import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { useImage } from 'react-image';

import fallbackImg from '../../shared/assets/fallback-movie-img.svg';
import DateFormatters from '../../shared/date-formatters';
import OptionSelector from '../../shared/options/OptionSelector';
import movieType from '../../types/movie';
import {
  ActionBox,
  ActionButton,
  Cover,
  Tagline,
  MovieBox,
  Title,
  TitleBox,
  Year,
} from './Movie.style';

const Movie = ({
  movie, onDelete, onEdit, onOpenDetails,
}) => {
  const actions = ['Edit', 'Delete'];
  const handleAction = useCallback((action) => {
    if (action === 'Edit') {
      onEdit(movie);
    } else if (action === 'Delete') {
      onDelete(movie);
    }
  }, [movie, onDelete, onEdit]);
  const { src: posterSrc } = useImage({
    srcList: [movie.poster_path, fallbackImg],
    useSuspense: false,
  });
  return (
    <MovieBox>
      <ActionBox>
        <OptionSelector
          onClick={handleAction}
          options={actions}
          hideChildren
          showCloseButton
          positionRight
        >
          <ActionButton>
            <FontAwesomeIcon icon={faEllipsisV} data-testid="actionsButton" />
          </ActionButton>
        </OptionSelector>
      </ActionBox>
      <Cover
        src={posterSrc}
        alt={movie.title}
        onClick={() => onOpenDetails(movie)}
      />
      <TitleBox>
        <Title onClick={() => onOpenDetails(movie)}>{movie.title}</Title>
        <Year>{DateFormatters.formatYear(movie.release_date)}</Year>
      </TitleBox>
      <Tagline>{movie.tagline}</Tagline>
    </MovieBox>
  );
};

Movie.propTypes = {
  movie: movieType.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onOpenDetails: PropTypes.func.isRequired,
};

export default Movie;
