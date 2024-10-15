import { Meta, StoryFn } from '@storybook/react';

import { ErrorComponent, ErrorComponentProps } from './index';

export default {
  title: 'Components/ErrorComponent',
  component: ErrorComponent,
} as Meta;

const Template: StoryFn<ErrorComponentProps> = (args) => <ErrorComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: null,
};

export const WithError = Template.bind({});
WithError.args = {
  error: new Error('This is an error message'),
};

export const WithCustomError = Template.bind({});
WithCustomError.args = {
  error: {
    name: 'CustomError',
    message: 'This is a custom error message',
    stack: 'Error stack trace here',
  },
};
