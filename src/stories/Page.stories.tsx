import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { Page } from "./Page";
import { Facebook } from "./Facbook";
export default {
  title: "Example/Page",
  component: Facebook,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Facebook> = (args) => (
  <Facebook {...args} />
);

// export const LoggedOut = Template.bind({});

// export const LoggedIn = Template.bind({});
export const FacebookExample = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
FacebookExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole("button", { name: /Log in/i });
  await userEvent.click(loginButton);
};
