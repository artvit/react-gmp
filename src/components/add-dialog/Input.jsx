import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBlock = styled.div`
  margin: 20px 0;
`;

const InputTitle = styled.div`
  text-transform: uppercase;
  color: #f65261;
  margin-bottom: 12px;
`;

const InputControl = styled.input`
  background: rgba(50, 50, 50, 0.40);
  color: white;
  width: 100%;
  padding: 10px;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Input = ({ title, type, placeholder }) => (
  <InputBlock>
    <InputTitle>{title}</InputTitle>
    <InputControl type={type} placeholder={placeholder} />
  </InputBlock>
);

Input.defaultProps = {
  type: 'text',
  placeholder: ''
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'date']),
  placeholder: PropTypes.string
};

export default Input;
