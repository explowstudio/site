import { styled } from "@/ui/stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const SmallTitle = styled("small", {
  display: "inline-flex",
  alignItems: "center",
  gap: "$2",

  fontSize: "$sm",
  lineHeight: "$sm",
  fontWeight: "$medium",

  color: "$gray700",
  textTransform: "uppercase",
});

export const Title = styled("h1", {
  fontSize: "$3xl",
  lineHeight: "$3xl",
  fontWeight: "$semiBold",

  marginTop: "$5",
});

export const Slogan = styled("span", {
  fontSize: "$lg",
  lineHeight: "$lg",
  textTransform: "uppercase",

  maxWidth: "128px",
  marginBlock: "$44 $14",
});
