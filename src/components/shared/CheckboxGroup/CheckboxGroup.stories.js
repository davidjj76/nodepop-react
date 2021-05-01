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
  options: [
    { value: 'lifestyle', label: 'Lifestyle' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'motor', label: 'Motor' },
    { value: 'work', label: 'Work' },
  ],
  value: ['mobile', 'motor'],
};
