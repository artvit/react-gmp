import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActionsBox = styled.div`
  background: #232323;
  border-radius: 4px;
  padding: 5px 0;
`;

const Action = styled.div`
  padding: 5px 25px 5px 10px;
  cursor: pointer;
  &:hover {
    background: #f65261;
  }
`;

const CloseButton = styled.div`
  text-align: right;
  padding-right: 10px;
`;

const CloseIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

const ActionList = ({ onDelete, onEdit, onClose }) => (
  <ActionsBox>
    <CloseButton><CloseIcon icon={faTimes} size="xs" onClick={onClose} /></CloseButton>
    <Action onClick={onEdit}>Edit</Action>
    <Action onClick={onDelete}>Delete</Action>
  </ActionsBox>
);

ActionList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ActionList;
