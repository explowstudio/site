import { styled } from "@/ui/stitches.config";

export const Title = styled("h1", {
  fontSize: "$3xl",
  lineHeight: "$3xl",
  fontWeight: "$semiBold",

  marginTop: "$5",
  maxWidth: "520px",

  variants: {
    variant: {
      primary: {
        color: "$black",
      },
      secondary: {
        color: "$white",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

export const Description = styled("p", {
  color: "$gray500",
  maxWidth: "624px",
  marginTop: "$6",

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
