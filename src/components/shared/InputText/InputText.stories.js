import React from 'react';

import InputText from './InputText';

export default {
  title: 'InputText',
  argTypes: { onChange: { action: 'changed' } },
};

const Template = args => <InputText {...args} />;
export const Text = Template.bind({});
Text.args = {
  type: InputText.types.text,
  label: 'Name',
  placeholder: 'Write your name',
};

export const Password = Template.bind({});
Password.args = {
  type: InputText.types.password,
  label: 'Password',
  placeholder: 'Write your password',
};

export const Number = Template.bind({});
Number.args = {
  type: InputText.types.number,
  label: 'Price',
  placeholder: 'Write desired price',
};
