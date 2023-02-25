import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Popover as Component } from './Popover';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
      title: 'Components/atoms/Popover',
      component: Component,

} as ComponentMeta<typeof Component>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => <Component  {...args} />;



export const Popover = Template.bind({});

