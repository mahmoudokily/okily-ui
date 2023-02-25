import { ComponentMeta, ComponentStory } from "@storybook/react";
import theme from "../../ui/theme";
import { Card } from './Card'

export default {
      title: 'Components/atoms/Card',
      component: Card,
      // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
      argTypes: {
            backgroundColor: { control: 'color' },

      },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card  {...args} />;


export const CardElement = Template.bind({});
