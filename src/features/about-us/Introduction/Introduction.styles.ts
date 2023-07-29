import { Grid } from "@/ui";
import { styled } from "@/ui/stitches.config";

export const Container = styled("section", {
  background: "$gray50",
  paddingBlock: "$20 $40",
});

export const Content = styled(Grid, {
  display: "flex",
  flexDirection: "column",
  gap: "$16",
});

export const UpSide = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const TextGroup = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
});

export const TitleGroup = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const SmallTitle = styled("h2", {
  fontSize: "$md",
  lineHeight: "$md",
  fontWeight: "$medium",
});

export const Title = styled("h1", {
  fontSize: "$4xl",
  lineHeight: "$4xl",
  fontWeight: "$semiBold",
});

export const DescriptionGroup = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  maxWidth: "465px",
});

export const Description = styled("p", {
  fontSize: "$sm",
  lineHeight: "$sm",
});

export const BottomSide = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "> img": {
    pointerEvents: "none",
    height: "305px",
  },
});

export const TextureGroup = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const FromSPToWorld = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: "$2",

  fontSize: "$xs",
  lineHeight: "$xs",
  fontWeight: "$semiBold",

  marginLeft: "auto",
  marginTop: "-$6",
});
