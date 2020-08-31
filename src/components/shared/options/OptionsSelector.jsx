import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Option, OptionList } from './option-list';
import { optionType } from './option-type';
import useClickOutside from '../use-click-outside.effect';

const PositionedOptionList = styled(OptionList)`
  position: absolute;
`;

const InlineBlock = styled.div`
  display: inline-block;
`;

const OptionsSelector = ({ options, onChange, children }) => {
  const [showOptions, setShowOptions] = useState(false);
  const toggleOptionsShown = () => setShowOptions(prevState => !prevState);
  const onClickOutside = useCallback(() => setShowOptions(false), []);
  const listRef = useClickOutside(onClickOutside);

  const selectOption = option => {
    onChange(typeof option === 'string' ? option : option.value);
    setShowOptions(false);
  };
  const getOptionComponent = option => {
    if (typeof option === 'string') {
      return <Option key={option} onClick={() => selectOption(option)}>{option}</Option>;
    }
    return <Option key={option.value} onClick={() => selectOption(option)}>{option.title}</Option>;
  };

  return (
    <InlineBlock>
      { React.cloneElement(children, { onClick: toggleOptionsShown }) }
      { showOptions
      && (
        <PositionedOptionList ref={listRef}>
          {options.map(getOptionComponent)}
        </PositionedOptionList>
      )}
    </InlineBlock>
  );
};

OptionsSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(optionType).isRequired
};

export default OptionsSelector;
