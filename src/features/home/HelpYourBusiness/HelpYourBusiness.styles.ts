import { Grid } from "@/ui";
import { styled } from "@/ui/stitches.config";

export const Container = styled(Grid, {
  paddingBottom: "124px",

  "@md": {
    paddingBlock: "$24",
  },
});

export const TitleRoot = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@md": {
    textAlign: "center",
    justifyContent: "center",
  },
});

export const Title = styled("h1", {
  fontSize: "$4xl",
  lineHeight: "$4xl",
  fontWeight: "$medium",
  marginBottom: "$6",

  "@md": {
    fontSize: "$3xl",
    lineHeight: "$3xl",
  },
});

export const Subtitle = styled("h3", {
  fontSize: "$lg",
  lineHeight: "$lg",
  fontWeight: "$regular",
  color: "$gray600",
});

export const Slogan = styled("span", {
  fontSize: "$lg",
  lineHeight: "$lg",
  textTransform: "uppercase",

  maxWidth: "128px",
  marginBlock: "$44 $14",

  "@md": {
    display: "none",
  },
});

export const Content = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  gap: "$6",
  marginTop: "$12",

  "@md": {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: "60px",
  },
});

export const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "12px",

  "> strong": {
    fontSize: "$1xl",
    lineHeight: "$1xl",
    textTransform: "uppercase",
    fontWeight: "$medium",
    marginBottom: "32px",
  },

  "> span": {
    color: "$gray500",
    fontSize: "$md",
    lineHeight: "$md",
    fontWeight: "$regular",
  },
});
