import React from 'react';

import CheckboxGroup from './CheckboxGroup';

export default {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
  argTypes: { onChange: { action: 'changed' } },
};

const Template = args => <CheckboxGroup {...args} />;

export const Tags = Template.bind({});
Tags.args = {
  label: 'Tags',
  name: 'tags',
  options: {
    mobile: 'Mobile',
    motor: 'Motor',
    lifestyle: 'Lifestyle',
    work: 'Work',
  },
  value: ['mobile', 'motor'],
};
