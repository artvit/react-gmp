import styled from 'styled-components';

const InputControl = styled.input`
  background: rgba(50, 50, 50, 0.40);
  color: white;
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ errored }) => (errored ? '#f65261' : 'rgba(0,0,0,0)')};
  font-size: 16px;
  border-radius: 4px;
  box-sizing: border-box;
`;

export default InputControl;
