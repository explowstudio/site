import type { Meta, StoryObj } from "@storybook/react";

import { Logo } from ".";

const meta = {
  title: "Logo",
  component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Black: Story = {
  args: {
    color: "black",
  },
};

export const White: Story = {
  args: {
    color: "white",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "black",
          padding: "24px",
          borderRadius: "8px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
