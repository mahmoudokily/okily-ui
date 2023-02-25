import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button as ButtonEl } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
      title: 'Components/atoms/Button',
      component: ButtonEl,
      argTypes: {
            children: {
                  type: 'string',
                  defaultValue: 'hello world'
            }
      },
} as ComponentMeta<typeof ButtonEl>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonEl> = (args) => <ButtonEl  {...args} />;



export const Button = Template.bind({});

