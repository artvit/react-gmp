import styled from 'styled-components';

export const InputBlock = styled.div`
  margin: 20px 0;
`;

export const InputTitle = styled.div`
  text-transform: uppercase;
  color: #f65261;
  margin-bottom: 12px;
`;

export const ErrorText = styled.div`
  visibility: ${({ shown }) => (shown ? 'visible' : 'hidden')};
  height: 16px;
  font-size: 12px;
  color: #f65261; 
`;
