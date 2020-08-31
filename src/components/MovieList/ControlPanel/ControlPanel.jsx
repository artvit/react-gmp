import React from 'react';
import PropTypes from 'prop-types';
import { ControlBox } from './ControlPanel.styles';
import SortBySelect from './SortBySelect';
import FilterSelect from './FilterSelect';
import { optionArrayType } from '../../shared/options/option-type';

const ControlPanel = ({
  onFilterChange, onSortChange, selectedFilter, selectedSortBy, sortByOptions, genreOptions
}) => (
  <ControlBox>
    <FilterSelect
      filters={genreOptions}
      selected={selectedFilter}
      onFilterChange={onFilterChange}
    />
    <SortBySelect
      options={sortByOptions}
      selected={selectedSortBy}
      onChange={onSortChange}
    />
  </ControlBox>
);

ControlPanel.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  selectedFilter: PropTypes.string.isRequired,
  selectedSortBy: optionArrayType.isRequired,
  sortByOptions: optionArrayType.isRequired,
  genreOptions: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ControlPanel;
