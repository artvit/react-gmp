import React from 'react';
import PropTypes from 'prop-types';
import { Button, Label } from './ControlPanel.styles';
import OptionsSelector from '../../shared/options/OptionsSelector';
import { optionArrayType } from '../../shared/options/option-type';

const SortBySelect = ({ onChange, selected, options }) => {
  const selectedItem = options.find(o => o.value === selected);
  return (
    <div>
      <Label>Sort by</Label>
      <OptionsSelector onChange={onChange} options={options}>
        <Button>{selectedItem.title}</Button>
      </OptionsSelector>
    </div>
  );
};

SortBySelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: optionArrayType.isRequired,
  selected: PropTypes.string.isRequired
};

export default SortBySelect;
