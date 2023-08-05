import { Grid } from "@/ui";
import { FadeIn } from "@/ui/_transitions";
import { styled, keyframes } from "@/ui/stitches.config";

export const Container = styled(Grid, {
  paddingBlock: "$24",

  "@md": {
    paddingBlock: "$16",
  },
});

const progressiveExpansion = keyframes({
  from: {
    width: 0,
  },
  to: {
    width: "100%",
  },
});

export const Content = styled(FadeIn.WhileInView, {
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
      width: "0",
      height: "3px",
      background: "linear-gradient(to right, $salmon500, $purple500)",
      animation: `${progressiveExpansion} 0.8s 1.8s forwards`,

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
