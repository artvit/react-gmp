import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InputControl from './InputControl';
import SelectInputControl from './SelectInputControl';

const InputBlock = styled.div`
  margin: 20px 0;
`;

const InputTitle = styled.div`
  text-transform: uppercase;
  color: #f65261;
  margin-bottom: 12px;
`;

const TextValue = styled.div`
  font-size: 16px;
`;

const Input = ({
  title, type, placeholder, value, options, onChange
}) => {
  let inputControl;
  if (type === 'readonly') {
    inputControl = <TextValue>{value}</TextValue>;
  } else if (type === 'select') {
    inputControl = (
      <SelectInputControl
        placeholder={placeholder}
        value={value}
        options={options}
        onChange={onChange}
      />
    );
  } else {
    inputControl = (
      <InputControl
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
      />
    );
  }
  return (
    <InputBlock>
      {title && <InputTitle>{title}</InputTitle>}
      {inputControl}
    </InputBlock>
  );
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  options: [],
  onChange: () => {}
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'date', 'select', 'readonly']),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.any),
  onChange: PropTypes.func
};

export default Input;
