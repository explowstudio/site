import { Grid } from "@/ui";
import { styled } from "@/ui/stitches.config";

export const Container = styled(Grid, {
  paddingBlock: "$24",
});

export const Content = styled("p", {
  fontSize: "42px",
  lineHeight: "130%",
  marginTop: "$3",

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
    },
  },
});

export const CallToAction = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "> small": {
    maxWidth: "652px",

    fontSize: "$lg",
    lineHeight: "$lg",
  },
});
