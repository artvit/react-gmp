import React from 'react';
import Input from '../shared/Input';

export default {
  title: 'Input',
  component: Input,
};

// eslint-disable-next-line react/prop-types
const Template = ({ type, title, value, options, onChange }) => (
  <Input
    type={type}
    title={title}
    value={value}
    options={options}
    onChange={onChange}
  />
);

export const Readonly = Template.bind({});
Readonly.args = {
  type: 'readonly',
  title: 'Readonly',
  value: 'readonly value',
};

export const Date = Template.bind({});
Date.args = {
  type: 'date',
  title: 'Date',
  value: '2020-01-01',
};

const options = (new Array(5)).map((v, idx) => ({ title: `Option ${idx}`, value: `o${idx}` }));

export const Select = Template.bind({});
Select.args = {
  type: 'select',
  title: 'Select',
  options,
  placeholder: 'Select',
};

export const Multiselect = Template.bind({});
Multiselect.args = {
  type: 'multiselect',
  title: 'Multiselect',
  options,
  placeholder: 'Select multiple',
};

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  title: 'Text',
  value: 'lorem ipsum',
  placeholder: 'Text...',
};
