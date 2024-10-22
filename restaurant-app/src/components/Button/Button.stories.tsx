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
  text: 'Custom Class',
  className: 'custom-button-class',
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  children: <span>Child Element</span>,
};

export const WithClickHandler = Template.bind({});
WithClickHandler.args = {
  text: 'Click Handler',
  onClick: () => alert('Custom click handler!'),
};

export const WithChildrenHandler = Template.bind({});
WithChildrenHandler.args = {
  className: 'nav-toggle-btn',
  text: 'Foo',
  children: <span className="line top"></span>,
  onClick: () => alert('Custom click handler!'),
};
