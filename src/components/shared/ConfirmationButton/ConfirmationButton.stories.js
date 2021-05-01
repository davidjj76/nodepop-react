import React from 'react';

import ConfirmationButton from './ConfirmationButton';
import Button from '../Button';

export default {
  title: 'ConfirmationButton',
  component: ConfirmationButton,
  argTypes: { onConfirm: { action: 'confirmed' } },
};

const Template = args => <ConfirmationButton {...args} />;

export const Delete = Template.bind({});
Delete.args = {
  children: 'Delete',
  confirmation: 'Are you sure you want to delete this advert?',
};

export const Logout = Template.bind({});
Logout.args = {
  children: 'Logout',
  variant: Button.variants.secondary,
  confirmation: 'Are you sure you want to logout?',
};
