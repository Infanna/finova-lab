import { Meta, Story } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<{ label: string; onClick: () => void }> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Click Me",
  onClick: () => alert("Clicked!"),
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  onClick: () => {},
};
