import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  size: Button.sizes.base,
  variant: Button.variants.primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  size: Button.sizes.base,
  variant: Button.variants.secondary,
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large',
  size: Button.sizes.lg,
  variant: Button.variants.primary,
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small',
  size: Button.sizes.sm,
  variant: Button.variants.primary,
};
