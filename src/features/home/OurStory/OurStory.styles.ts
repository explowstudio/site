import { Grid } from "@/ui";
import { styled } from "@/ui/stitches.config";

export const Container = styled(Grid, {
  paddingBlock: "$24",

  "@md": {
    paddingBlock: "$16",
  },
});

export const Content = styled("p", {
  fontSize: "42px",
  lineHeight: "130%",
  marginTop: "$3",

  "@md": {
    fontSize: "$md",
    lineHeight: "$md",
  },

  "@media (min-width: 667px) and (max-width: 888px)": {
    fontSize: "$1xl",
    lineHeight: "$1xl",
  },

  "> span": {
    position: "relative",
    fontWeight: "$medium",

    "&::after": {
      content: "",
      position: "absolute",
      width: "100%",
      height: "3px",
      background: "linear-gradient(to right, $salmon500, $purple500)",

      left: 0,
      bottom: 0,
      zIndex: "$bottom",

      "@md": {
        bottom: "-4px",
        height: "2px",
      },
    },
  },
});

export const CallToAction = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@sm": {
    flexDirection: "column-reverse",
    gap: "$8",
  },

  "> small": {
    maxWidth: "652px",

    fontSize: "$lg",
    lineHeight: "$lg",

    "@md": {
      fontSize: "$xs",
      lineHeight: "$xs",
      textAlign: "center",
    },

    "@media (min-width: 667px) and (max-width: 888px)": {
      maxWidth: "284px",
      textAlign: "left",
    },
  },
});
