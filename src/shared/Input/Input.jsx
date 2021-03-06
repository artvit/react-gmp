import PropTypes from 'prop-types';
import React from 'react';

import { optionType } from '../options/option-type';
import { ErrorText, InputBlock, InputTitle } from './Input.style';
import InputControl from './InputControl';
import MultiselectInputControl from './MultiselectInputControl';
import ReadonlyInputControl from './ReadonlyInputControl';
import SelectInputControl from './SelectInputControl';

// PATTERN: facade
const Input = ({ title, type, placeholder, value, options, onChange, name, error, touched }) => {
  let inputControl;
  if (type === 'readonly') {
    inputControl = <ReadonlyInputControl>{value}</ReadonlyInputControl>;
  } else if (type === 'select') {
    inputControl = (
      <SelectInputControl
        name={name}
        placeholder={placeholder}
        value={value}
        options={options}
        errored={touched && !!error}
        onChange={(v) => onChange(name, v)}
      />
    );
  } else if (type === 'multiselect') {
    const calculatedTouched = Array.isArray(touched) ? touched.some((t) => t) : touched;
    inputControl = (
      <MultiselectInputControl
        name={name}
        placeholder={placeholder}
        value={value}
        options={options}
        errored={calculatedTouched && !!error}
        onChange={(v) => onChange(name, v)}
      />
    );
  } else {
    inputControl = (
      <InputControl
        type={type}
        placeholder={placeholder}
        value={value}
        errored={touched && !!error}
        onChange={(evt) => onChange(name, evt.target.value)}
      />
    );
  }
  return (
    <InputBlock>
      {title && <InputTitle>{title}</InputTitle>}
      {inputControl}
      <ErrorText shown={!!error}>
        {touched && error}
      </ErrorText>
    </InputBlock>
  );
};

Input.defaultProps = {
  name: '',
  type: 'text',
  placeholder: '',
  value: '',
  options: [],
  touched: false,
  error: undefined,
  onChange: () => {},
};

Input.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'date', 'select', 'multiselect', 'readonly']),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  options: PropTypes.arrayOf(optionType),
  touched: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.bool),
  ]),
  error: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
