import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { OptionList } from './option-list';

export const PositionedOptionList = styled(OptionList)`
  position: absolute;
  ${({ positionRight }) => positionRight && `
    right: 0;
  `}
`;

export const InlineBlock = styled.div`
  display: inline-block;
`;

export const CloseButton = styled.div`
  text-align: right;
  padding-right: 10px;
`;

export const CloseIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;
