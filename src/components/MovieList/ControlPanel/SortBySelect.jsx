import React from 'react';
import PropTypes from 'prop-types';
import { Button, Label } from './ControlPanel.styles';
import OptionSelector from '../../../shared/options/OptionSelector';
import { optionArrayType } from '../../../shared/options/option-type';

const SortBySelect = ({ onChange, selected, options }) => {
  const selectedItem = options.find(o => o.value === selected);
  return (
    <div>
      <Label>Sort by</Label>
      <OptionSelector onChange={onChange} options={options}>
        <Button>{selectedItem.title}</Button>
      </OptionSelector>
    </div>
  );
};

SortBySelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: optionArrayType.isRequired,
  selected: PropTypes.string.isRequired
};

export default SortBySelect;
