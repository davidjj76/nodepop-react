import React from 'react';

import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

const Template = args => <Checkbox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  label: 'Remember',
  checked: true,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  label: 'Remember',
};
