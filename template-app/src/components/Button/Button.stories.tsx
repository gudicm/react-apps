import { StoryFn, Meta } from '@storybook/react';

import { Button, ButtonProps } from '.';


export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        text: { control: 'text' },
        classname: { control: 'text' },
        onClick: { action: 'clicked' },
    },
} as Meta;




const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Click me',
    classname: 'button',
};

export const NoClassParam = Template.bind({});
Default.args = {
    text: 'No class param',
};

export const NoTextParam = Template.bind({});
NoTextParam.args = {
    classname: 'button',
};

export const CustomText = Template.bind({});
CustomText.args = {
    text: 'Custom Button',
    classname: 'button',
};

export const CustomClass = Template.bind({});
CustomClass.args = {
    text: 'Styled Button',
    classname: 'button custom',
};
