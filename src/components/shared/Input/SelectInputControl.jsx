import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputControl from './InputControl';
import { Option, OptionList } from './option-list';
import useClickOutside from '../use-click-outside.effect';

const PositionedOptionList = styled(OptionList)`
  position: absolute;
`;

const SelectInputControl = ({
  value, placeholder, options, onChange
}) => {
  const [selected, setSelected] = useState(value);
  const [showOptions, setShowOptions] = useState(false);
  const listRef = useRef(null);
  const onClickOutside = useCallback(() => setShowOptions(false), []);
  useClickOutside(listRef, onClickOutside);

  const select = option => () => {
    setSelected(option);
    setShowOptions(false);
    onChange(option);
  };

  return (
    <>
      <InputControl
        value={selected}
        placeholder={placeholder}
        readOnly
        onClick={() => setShowOptions(true)}
      />
      {showOptions && (
        <PositionedOptionList ref={listRef}>
          {options.map(o => <Option key={o} onClick={select(o)}>{o}</Option>)}
        </PositionedOptionList>
      )}
    </>
  );
};

SelectInputControl.defaultProps = {
  value: '',
  placeholder: 'Select...',
  options: [],
  onChange: () => {}
};

SelectInputControl.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func
};

export default SelectInputControl;
