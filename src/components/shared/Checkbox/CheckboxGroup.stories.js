import React from 'react';

import CheckboxGroup from './CheckboxGroup';

export default {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
};

const Template = args => <CheckboxGroup {...args} />;

export const Tags = Template.bind({});
Tags.args = {
  label: 'Tags',
  name: 'tags',
  options: ['mobile', 'motor', 'lifestyle', 'work'],
  value: ['mobile', 'motor'],
};
