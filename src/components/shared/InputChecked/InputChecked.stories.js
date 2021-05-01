import React from 'react';

import * as InputChecked from './InputChecked';

export default {
  title: 'InputChecked',
  argTypes: { onChange: { action: 'changed' } },
};

const TemplateCheckbox = args => <InputChecked.Checkbox {...args} />;
export const Checkbox = TemplateCheckbox.bind({});
Checkbox.args = {
  label: 'Remember',
  checked: true,
};

const TemplateRadio = args => <InputChecked.Radio {...args} />;
export const Radio = TemplateRadio.bind({});
Radio.args = {
  label: 'Sale',
  checked: false,
};
