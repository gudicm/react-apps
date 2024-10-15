import { StoryFn, Meta } from '@storybook/react';

import { Circular, CircularProps } from '.';

export default {
    title: 'Components/Circular',
    component: Circular,
    argTypes: {
        size: { control: 'number' },
        color: { control: 'color' },
        strokeWidth: { control: 'number' },
    },
} as Meta;

const Template: StoryFn<CircularProps> = (args) => <Circular {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 100,
    color: 'grey',
    strokeWidth: 10,
};

export const LargeBlue = Template.bind({});
LargeBlue.args = {
    size: 200,
    color: 'blue',
    strokeWidth: 15,
};

export const SmallRed = Template.bind({});
SmallRed.args = {
    size: 50,
    color: 'red',
    strokeWidth: 5,
};

export const NoParams = Template.bind({});
NoParams.args = {
    
};

export const NoSize = Template.bind({});
NoSize.args = {
    color: 'green',
    strokeWidth: 20
};
