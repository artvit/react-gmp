import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, Label } from './ControlPanel.styles';
import { Option, OptionList } from '../../shared/Input/option-list';

const PositionedOptionList = styled(OptionList)`
  position: absolute;
  right: 0;
`;

const sortByOptions = [{
  value: 'released',
  title: 'Released Date'
}, {
  value: 'title',
  title: 'Title'
}];

const SortBySelect = ({ onChange }) => {
  const [optionsShown, setOptionsShown] = useState(false);
  const [sortBy, setSortBy] = useState(() => sortByOptions[0]);
  const toggleOptionsShown = () => setOptionsShown(prevState => !prevState);
  const selectSortBy = s => {
    setSortBy(s);
    setOptionsShown(false);
    onChange(s.value);
  };
  return (
    <div>
      <Label>Sort by</Label>
      <Button onClick={toggleOptionsShown}>{sortBy.title}</Button>
      { optionsShown
      && (
      <PositionedOptionList>
        {sortByOptions.map(s => (
          <Option key={s.value} onClick={() => selectSortBy(s)}>{s.title}</Option>
        ))}
      </PositionedOptionList>
      )}
    </div>
  );
};

SortBySelect.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default SortBySelect;
