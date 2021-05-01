import React from 'react';

import RadioGroup from './RadioGroup';

export default {
  title: 'RadioGroup',
  component: RadioGroup,
  argTypes: { onChange: { action: 'changed' } },
};

const Template = args => <RadioGroup {...args} />;

export const Sale = Template.bind({});
Sale.args = {
  label: 'Sale',
  name: 'sale',
  options: { sell: 'Sell', buy: 'Buy', all: 'All' },
  value: 'sell',
};
