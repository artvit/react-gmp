import React from 'react';
import Dialog from '../shared/Dialog/Dialog';

export default {
  title: 'Dialog',
  component: Dialog,
};

// eslint-disable-next-line react/prop-types
const Template = ({ title, onClose }) => (
  <Dialog title={title} onClose={onClose}>
    Dialog content
  </Dialog>
);

export const Normal = Template.bind({});
Normal.args = {
  title: 'Dialog Title',
};
