import { styled } from "@/ui/stitches.config";

export const SmallTitle = styled("small", {
  display: "inline-flex",
  alignItems: "center",
  gap: "$2",

  fontSize: "$sm",
  lineHeight: "$sm",
  fontWeight: "$medium",

  textTransform: "uppercase",

  variants: {
    variant: {
      primary: {
        color: "$gray500",
      },
      secondary: {
        color: "$gray200",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});
