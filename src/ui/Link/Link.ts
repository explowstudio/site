import NextLink from "next/link";

import { styled } from "@/ui/stitches.config";

export const Link = styled(NextLink, {
  position: "relative",

  display: "flex",
  alignItems: "center",
  gap: "$2",

  fontSize: "$sm",
  lineHeight: "$sm",
  fontWeight: "$medium",

  transition: "$default",
  width: "fit-content",

  variants: {
    linkUnderline: {
      true: {
        "&:hover::after": {
          transform: "scale(1)",
          transformOrigin: "left",
        },

        "&::after": {
          content: "",
          position: "absolute",
          bottom: "-4px",
          left: 0,
          width: "100%",
          height: "1px",
          transform: "scaleX(0)",
          transformOrigin: "right",
          transition: "transform .4s $easeOutCubic",
          willChange: "transform",
        },
      },
    },
    color: {
      primary: {
        color: "$black",

        "&::after": {
          background: "$black",
        },
      },
      secondary: {
        color: "$gray500",

        "&::after": {
          background: "$gray500",
        },
      },
      tertiary: {
        color: "$gray100",

        "&::after": {
          background: "$gray100",
        },
      },
    },
  },

  defaultVariants: {
    linkUnderline: true,
    color: "primary",
  },
});
