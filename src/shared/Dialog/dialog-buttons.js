import styled from 'styled-components';

export const BottomButtons = styled.div`
  margin-top: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;

  >* {
    margin-left: 10px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  padding: 10px 30px;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  background: transparent;
  border: 1px solid #f65261;
  color: #f65261;
`;

export const PrimaryButton = styled(Button)`
  background: #f65261;
  color: white;
  border: 0;
`;
