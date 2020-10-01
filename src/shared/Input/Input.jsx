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
  title, type, placeholder, value, options, onChange, name
}) => {
  let inputControl;
  if (type === 'readonly') {
    inputControl = <TextValue>{value}</TextValue>;
  } else if (type === 'select') {
    inputControl = (
      <SelectInputControl
        name={name}
        placeholder={placeholder}
        value={value}
        options={options}
        onClick={v => onChange(name, v)}
      />
    );
  } else {
    inputControl = (
      <InputControl
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={evt => onChange(name, evt.target.value)}
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
  name: '',
  type: 'text',
  placeholder: '',
  value: '',
  options: [],
  onChange: () => {}
};

Input.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'date', 'select', 'readonly']),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.any),
  onChange: PropTypes.func
};

export default Input;
