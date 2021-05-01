import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  size: Button.sizes.base,
  variant: Button.variants.primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: Button.variants.secondary,
};

export const Large = Template.bind({});
Large.args = {
  ...Primary.args,
  size: Button.sizes.lg,
};

export const Small = Template.bind({});
Small.args = {
  ...Primary.args,
  size: Button.sizes.sm,
};

export const Full = Template.bind({});
Full.args = {
  ...Primary.args,
  full: true,
};
