import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Option, OptionList } from './option-list';
import { optionType } from './option-type';

const PositionedOptionList = styled(OptionList)`
  position: absolute;
  ${({ positionRight }) => positionRight && `
    right: 0;
  `}
`;

const InlineBlock = styled.div`
  display: inline-block;
`;

const CloseButton = styled.div`
  text-align: right;
  padding-right: 10px;
`;

const CloseIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

class OptionSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showOptions: false };

    this.listRef = React.createRef();
    this.handleClickOutside = this.onClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  onClickOutside(event) {
    if (this.listRef && !this.listRef.current.contains(event.target)) {
      this.setState({ showOptions: false });
    }
  }

  getOptionComponent(option) {
    if (typeof option === 'string') {
      return <Option key={option} onClick={() => this.selectOption(option)}>{option}</Option>;
    }
    return (
      <Option
        key={option.value}
        onClick={() => this.selectOption(option)}
      >
        {option.title}
      </Option>
    );
  }

  toggleShowOptions() {
    this.setState(({ showOptions }) => ({ showOptions: !showOptions }));
  }

  selectOption(option) {
    const { onChange } = this.props;
    onChange(typeof option === 'string' ? option : option.value);
    this.setState({ showOptions: false });
  }

  render() {
    const {
      options, children, showCloseButton, hideChildren, positionRight
    } = this.props;
    const { showOptions } = this.state;
    const showChildren = !hideChildren || !showOptions;

    return (
      <InlineBlock ref={this.listRef}>
        {showChildren
        && React.cloneElement(children, { onClick: (() => this.toggleShowOptions()) })}
        {showOptions
        && (
          <PositionedOptionList positionRight={positionRight}>
            {showCloseButton
            && (
              <CloseButton>
                <CloseIcon icon={faTimes} size="xs" onClick={() => this.toggleShowOptions()} />
              </CloseButton>
            )}
            {options.map(o => this.getOptionComponent(o))}
          </PositionedOptionList>
        )}
      </InlineBlock>
    );
  }
}

OptionSelector.defaultProps = {
  showCloseButton: false,
  hideChildren: false,
  positionRight: false
};
OptionSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(optionType).isRequired,
  showCloseButton: PropTypes.bool,
  hideChildren: PropTypes.bool,
  positionRight: PropTypes.bool
};

export default OptionSelector;
