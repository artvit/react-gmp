import styled from 'styled-components';

export const DialogPanel = styled.div`
  backdrop-filter: blur(8px) brightness(1.2);
  padding: 20px 40px;
  background: #232323;
  color: white;
  width: 600px;
`;

export const Title = styled.div`
  text-transform: uppercase;
  font-size: 32px;
`;

export const CloseButtonBox = styled.div`
  text-align: end;
`;

export const CloseButton = styled.button`
  border: 0;
  font-size: 50px;
  background: transparent;
  color: white;
  
  &:after {
    font-weight: 100;
    content: "×";
  }
`;
