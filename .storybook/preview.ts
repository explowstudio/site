import { globalStyles } from '../src/ui/stitches.config'

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "dark",
    }
  },
  decorators: [(Story) => {
    globalStyles()

    return Story()
  }]
};

export default preview;
