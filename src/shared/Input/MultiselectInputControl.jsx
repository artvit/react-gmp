import React from 'react';
import PropTypes from 'prop-types';
import SelectInputControl from './SelectInputControl';

const MultiselectInputControl = ({
  placeholder, value, options, onChange
}) => {
  const extendedOptions = options.map(o => ({
    value: o,
    title: o,
    selected: value.includes(o)
  }));
  const toggleOption = optionValue => {
    const option = extendedOptions.find(o => o.value === optionValue);
    option.selected = !option.selected;
  };
  const optionsChange = optionValue => {
    toggleOption(optionValue);
    return extendedOptions.filter(o => o.selected).map(o => o.value);
  };
  return (
    <SelectInputControl
      multi
      placeholder={placeholder}
      value={value}
      options={extendedOptions}
      onChange={v => onChange(optionsChange(v))}
    />
  );
};

MultiselectInputControl.defaultProps = {
  placeholder: '',
  value: '',
  options: [],
  onChange: () => {}
};

MultiselectInputControl.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.arrayOf(PropTypes.any),
  onChange: PropTypes.func
};

MultiselectInputControl.propTypes = {

};

export default MultiselectInputControl;
