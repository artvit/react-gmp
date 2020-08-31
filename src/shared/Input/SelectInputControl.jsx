import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputControl from './InputControl';
import OptionSelector from '../options/OptionSelector';
import { optionType } from '../options/option-type';

const StyledOptionSelector = styled(OptionSelector)`
  width: 100%;
`;

const SelectInputControl = ({
  value, placeholder, options, onChange
}) => (
  <StyledOptionSelector onChange={onChange} options={options}>
    <InputControl
      value={value}
      placeholder={placeholder}
      readOnly
    />
  </StyledOptionSelector>
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
