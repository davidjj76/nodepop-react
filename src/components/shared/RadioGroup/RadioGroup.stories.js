import React from 'react';

import RadioGroup from './RadioGroup';

export default {
  title: 'RadioGroup',
  component: RadioGroup,
  argTypes: { onChange: { action: 'changed' } },
};

const Template = args => <RadioGroup {...args} />;

export const SaleOrBuy = Template.bind({});
SaleOrBuy.args = {
  label: 'Sell or Buy',
  name: 'sale',
  options: [
    { value: 'sell', label: 'Sell' },
    { value: 'buy', label: 'Buy' },
    { value: 'all', label: 'All' },
  ],
  value: 'sell',
};
