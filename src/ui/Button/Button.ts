import { styled } from "@/ui/stitches.config";
import { ComponentProps } from "react";

export const Button = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",

  height: "42px",
  paddingInline: "$6",

  fontSize: "$sm",
  lineHeight: "$sm",
  fontWeight: "$semiBold",

  border: 0,
  borderRadius: "122px",

  transition: "$default",

  outline: "2px solid transparent",
  outlineOffset: "4px",

  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$black",

        "&:hover": {
          background: "$gray800",
        },

        "&:focus": {
          outlineColor: "$black",
        },
      },
      secondary: {
        color: "$black",
        background: "$white",

        "&:hover": {
          background: "$gray100",
        },

        "&:focus": {
          outlineColor: "$white",
        },
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

export type ButtonProps = ComponentProps<typeof Button>;
