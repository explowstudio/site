import { styled } from "@/ui/stitches.config";

import { Grid } from "@/ui";

export const Wrapper = styled("div", {
  position: "absolute",
  zIndex: "$fixed",
  left: 0,
  right: 0,
  top: 55,

  opacity: 0,
  visibility: "hidden",

  transition: "$default",
});

export const Paper = styled("nav", {
  height: "418px",

  marginTop: "$3",
  paddingBlock: "$16",

  variants: {
    color: {
      primary: {
        backgroundColor: "$gray50",
        borderBottom: "1px solid $gray100",
      },
      secondary: {
        backgroundColor: "$black",
        borderBottom: "1px solid $gray800",
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },
});

export const Content = styled(Grid, {
  display: "flex",
  columnGap: "$16",
});

export const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const Title = styled("h1", {
  fontSize: "$2xl",
  lineHeight: "$2xl",
  textTransform: "uppercase",

  fontWeight: "$regular",
  marginBottom: "$6",
});

export const Text = styled("span", {
  fontSize: "$md",
  lineHeight: "$md",
  marginBottom: "$3",
  transition: "$default",
  cursor: "default",

  variants: {
    color: {
      primary: {
        color: "$gray600",

        "&:hover": {
          color: "$black",
        },
      },
      secondary: {
        color: "$gray200",

        "&:hover": {
          color: "$white",
        },
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },
});

export const Row = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const SocialMedia = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$8",
});
