import { Grid } from "@/ui";

import { styled } from "@/ui/stitches.config";

export const Container = styled("section", {
  background: "$black",
  paddingBlock: "$20",
  marginBottom: "$36",

  "@md": {
    marginBottom: 0,
  },
});

export const Row = styled(Grid, {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "@md": {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "$8",
  },
});

export const Title = styled("h1", {
  maxWidth: "381px",

  fontSize: "32px",
  lineHeight: "normal",
  color: "$white",
  fontWeight: "$semiBold",
});

export const LargeTitle = styled("h1", {
  fontSize: "208px",
  lineHeight: "normal",
  fontWeight: "$bold",
  transition: "$default",
  cursor: "default",

  textShadow:
    "-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff",

  "&:hover": {
    color: "$white",
  },

  variants: {
    selected: {
      true: {
        color: "$white",
      },
    },
    position: {
      right: {
        transform: "translateX(140px)",
      },
      left: {
        transform: "translateX(-140px)",
      },
    },
  },

  "@md": {
    fontSize: "64px",
    transform: "translateX(0) !important",
  },
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",

  color: "$gray100",
  fontSize: "$1xl",
  lineHeight: "$1xl",

  maxWidth: "649px",
  width: "100%",

  "@md": {
    fontSize: "$sm",
    lineHeight: "$sm",
  },
});
