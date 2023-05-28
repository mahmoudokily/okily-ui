import { ComponentMeta, ComponentStory } from "@storybook/react";
import theme from "../../ui/theme";
import Component from '../Drower/Drawer'
import React from 'react';
type Props = React.ComponentProps<typeof Component>
export default {
      title: 'Components/atoms/Box',
      component: Component,
      // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
      argTypes: {

      },

} as ComponentMeta<typeof Component>;


const Template: ComponentStory<typeof Component> = (args) => <Component  {...args} />;

export const Box = Template.bind({})

