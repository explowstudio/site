import { Grid } from "@/ui";
import { styled } from "@/ui/stitches.config";

export const Container = styled("section", {
  background: "$gray50",
  paddingBlock: "$20 $40",

  "@md": {
    display: "flex",
    flexDirection: "column",
    paddingBlock: "$10",
  },
});

export const Content = styled(Grid, {
  display: "flex",
  flexDirection: "column",
  gap: "$16",

  "@md": {
    gap: "$6",
  },
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

  "@md": {
    flexDirection: "column",
  },
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

  "@lg": {
    fontSize: "$1xl",
    lineHeight: "$1xl",
    fontWeight: "$bold",
  },

  "@sm": {
    fontSize: "$xl",
    lineHeight: "$xl",
    fontWeight: "$bold",
  },
});

export const DescriptionGroup = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  maxWidth: "465px",

  "@md": {
    marginTop: "$6",
  },
});

export const Description = styled("p", {
  fontSize: "$sm",
  lineHeight: "$sm",
});

export const BottomSide = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "$16",

  "@1xl": {
    flexDirection: "column",
    alignItems: "flex-start",
  },

  "> img": {
    pointerEvents: "none",
    height: "fit-content",
    width: "100%",
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

  "@md": {
    marginTop: 0,
    marginInline: "auto",
  },
});
