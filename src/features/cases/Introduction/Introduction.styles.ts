import { Grid } from "@/ui";
import { styled } from "@/ui/stitches.config";

export const Container = styled(Grid, {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBlock: "$20",
});

export const Title = styled("h1", {
  fontSize: "$4xl",
  lineHeight: "$4xl",
  fontWeight: "$semiBold",
});

export const Description = styled("h2", {
  fontSize: "$1xl",
  lineHeight: "$1xl",
  fontWeight: "$regular",
  color: "$gray500",
  marginTop: "$1",
});

export const ScrollRoot = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$5",
  marginTop: "$10",

  "> span": {
    fontSize: "$sm",
    lineHeight: "$sm",
    color: "$gray700",
    fontWeight: "$medium",
  },
});

export const SloganRoot = styled("div", {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
});

export const Slogan = styled("span", {
  fontSize: "$lg",
  lineHeight: "$lg",
  textTransform: "uppercase",

  marginBottom: "52px",

  "@md": {
    marginBlock: "$10",
  },
});

export const Cover = styled("img", {
  width: "100vw",
});
