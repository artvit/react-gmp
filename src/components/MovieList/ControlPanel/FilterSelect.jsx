import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from './ControlPanel.styles';

const FilterSelect = ({ onFilterChange, filters }) => {
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
  onFilterChange: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default FilterSelect;
