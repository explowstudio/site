import { ArrowRight } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta = {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      name: "Variant",
      type: "string",
      defaultValue: "primary",
      description:
        "Variant changes the background-color and text-color of the button",
      options: ["primary", "secondary", "outlined"],
      control: {
        type: "radio",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Example",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Example <ArrowRight />
      </>
    ),
  },
};
