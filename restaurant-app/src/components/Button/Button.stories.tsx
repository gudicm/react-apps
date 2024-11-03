import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import Button from './index';

import './../../index.css';


export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Click Me',
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  text: 'Reservation',
  className: 'btn btn-hover',
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  text: 'Reservation',
  className: 'btn btn-hover',
  children: <span>Child Element</span>,
};

export const WithClickHandler = Template.bind({});
WithClickHandler.args = {
  text: 'Click Handler',
  onClick: () => alert('Custom click handler!'),
};

