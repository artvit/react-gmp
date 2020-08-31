import React from 'react';
import PropTypes from 'prop-types';
import InputControl from './InputControl';
import OptionsSelector from '../options/OptionsSelector';
import { optionType } from '../options/option-type';

const SelectInputControl = ({
  value, placeholder, options, onChange
}) => (
  <OptionsSelector onChange={onChange} options={options}>
    <InputControl
      value={value}
      placeholder={placeholder}
      readOnly
    />
  </OptionsSelector>
);

SelectInputControl.defaultProps = {
  value: '',
  placeholder: 'Select...',
  options: [],
  onChange: () => {}
};

SelectInputControl.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(optionType),
  onChange: PropTypes.func
};

export default SelectInputControl;
