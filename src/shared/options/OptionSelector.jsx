import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { faCheckSquare, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Option } from './option-list';
import { optionType } from './option-type';
import useClickOutside from '../use-click-outside.effect';
import { CloseButton, CloseIcon, InlineBlock, PositionedOptionList } from './OptionSelector.style';

const OptionSelector = ({
  options, onClick, children, showCloseButton, hideChildren, positionRight, multi,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const toggleOptionsShown = () => setShowOptions((prevState) => !prevState);
  const onClickOutside = useCallback(() => setShowOptions(false), []);
  const listRef = useClickOutside(onClickOutside);

  const selectOption = (option) => {
    onClick(typeof option === 'string' ? option : option.value);
    setShowOptions(false);
  };
  const getOptionComponent = (option) => {
    if (typeof option === 'string') {
      return (
        <Option key={option} onClick={() => selectOption(option)}>
          {option}
        </Option>
      );
    }
    return (
      <Option key={option.value} onClick={() => selectOption(option)}>
        {multi
        && <FontAwesomeIcon icon={option.selected ? faCheckSquare : faSquare} />} {option.title}
      </Option>
    );
  };
  const showChildren = !hideChildren || !showOptions;

  return (
    <InlineBlock ref={listRef}>
      { showChildren && React.cloneElement(children, { onClick: toggleOptionsShown }) }
      { showOptions
      && (
        <PositionedOptionList positionRight={positionRight}>
          {showCloseButton
          && (
          <CloseButton>
            <CloseIcon icon={faTimes} size="xs" onClick={toggleOptionsShown} />
          </CloseButton>
          )}
          {options.map(getOptionComponent)}
        </PositionedOptionList>
      )}
    </InlineBlock>
  );
};

OptionSelector.defaultProps = {
  showCloseButton: false,
  hideChildren: false,
  positionRight: false,
  multi: false,
};
OptionSelector.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(optionType).isRequired,
  showCloseButton: PropTypes.bool,
  hideChildren: PropTypes.bool,
  positionRight: PropTypes.bool,
  multi: PropTypes.bool,
};

export default OptionSelector;
