import React from 'react';
import PropTypes from 'prop-types';
import SelectInputControl from './SelectInputControl';

const MultiselectInputControl = ({ placeholder, value, options, onChange, errored }) => {
  const extendedOptions = options.map(o => ({
    value: o,
    title: o,
    selected: value.includes(o)
  }));
  const optionsChange = optionValue => {
    const option = extendedOptions.find(o => o.value === optionValue);
    option.selected = !option.selected;
    return extendedOptions.filter(o => o.selected).map(o => o.value);
  };
  return (
    <SelectInputControl
      multi
      placeholder={placeholder}
      value={value}
      options={extendedOptions}
      errored={errored}
      onChange={v => onChange(optionsChange(v))}
    />
  );
};

MultiselectInputControl.defaultProps = {
  placeholder: '',
  value: '',
  options: [],
  errored: false,
  onChange: () => {}
};

MultiselectInputControl.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.arrayOf(PropTypes.string),
  errored: PropTypes.bool,
  onChange: PropTypes.func
};

export default MultiselectInputControl;
