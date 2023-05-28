import { ComponentStory, ComponentMeta } from '@storybook/react';
import DrawerEl from './Drawer';
export default {
   title: 'Components/atoms/Drawer',
   component: DrawerEl,
   argTypes: {
      children: {
         type: 'string',
         defaultValue: 'hello world'
      }
   },
} as ComponentMeta<typeof DrawerEl>;

const Template: ComponentStory<typeof DrawerEl> = (args) => <DrawerEl />;



export const Drawer = Template.bind({});

