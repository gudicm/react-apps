import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { ListItem } from '../../types/components';

import List from './index';
import './../../index.css';

export default {
  title: 'Components/List',
  component: List,
} as Meta;

const Template: StoryFn<{ items: ListItem[] }> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      icon: (
        <span role="img" aria-label="star">
          ⭐
        </span>
      ),
      title: 'Star Item',
    },
    {
      icon: (
        <span role="img" aria-label="heart">
          ❤️
        </span>
      ),
      title: 'Heart Item',
    },
  ],
};
