import React from 'react';
import Logo from '../shared/logo/Logo';

export default {
  title: 'Logo',
  component: Logo,
};

// eslint-disable-next-line react/prop-types
const Template = ({ size }) => (
  <Logo size={size} />
);

export const Normal = Template.bind({});
Normal.args = {
  size: '30px',
};
