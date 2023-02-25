import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from '../../ui';
import Component from './Input';



export default {
      title: 'Components/atoms/Input',
      component: Component,
      argTypes: {
            width: {
                  type: 'number',
                  defaultValue: 500
            },
      }

} as ComponentMeta<typeof Component>



const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />



export const Input = Template.bind({})