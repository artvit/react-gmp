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
  value, placeholder, options, onChange, multi
}) => {
  const displayValue = Array.isArray(value) ? value.join(', ') : value;
  return (
    <StyledOptionSelector onClick={onChange} options={options} multi={multi}>
      <InputControl
        value={displayValue}
        placeholder={placeholder}
        readOnly
      />
    </StyledOptionSelector>
  );
};

SelectInputControl.defaultProps = {
  value: '',
  placeholder: 'Select...',
  options: [],
  multi: false,
  onChange: () => {}
};

SelectInputControl.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(optionType),
  multi: PropTypes.bool,
  onChange: PropTypes.func
};

export default SelectInputControl;
