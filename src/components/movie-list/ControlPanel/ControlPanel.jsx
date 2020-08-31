import React from 'react';
import PropTypes from 'prop-types';
import { ControlBox } from './ControlPanel.styles';
import SortBySelect from './SortBySelect';
import FilterSelect from './FilterSelect';

const ControlPanel = ({ onFilterChange, onSortChange }) => (
  <ControlBox>
    <FilterSelect onFilterChange={onFilterChange} />
    <SortBySelect onChange={onSortChange} />
  </ControlBox>
);

ControlPanel.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired
};

export default ControlPanel;
