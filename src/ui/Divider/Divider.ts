import { opacify } from "polished";

import { styled, theme } from "@/ui/stitches.config";

export const Divider = styled("hr", {
  border: 0,
  borderTop: "1px solid transparent",

  variants: {
    color: {
      primary: {
        borderColor: `${opacify(1)(theme.colors.gray100.value)}`,
      },
      secondary: {
        borderColor: "$gray800",
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },
});
