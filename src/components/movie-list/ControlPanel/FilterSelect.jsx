import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from './ControlPanel.styles';
import genres from '../../../data/genres';

const filters = ['All', ...genres.slice(0, 4)];

const FilterSelect = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const selectFilter = f => {
    setActiveFilter(f);
    onFilterChange(f);
  };
  return (
    <div>
      {filters.map(f => (
        <Button key={f} active={f === activeFilter} onClick={() => selectFilter(f)}>{f}</Button>
      ))}
    </div>
  );
};

FilterSelect.propTypes = {
  onFilterChange: PropTypes.func.isRequired
};

export default FilterSelect;
