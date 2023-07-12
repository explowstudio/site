import { styled } from "@/ui/stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const Slogan = styled("span", {
  fontSize: "$lg",
  lineHeight: "$lg",
  textTransform: "uppercase",

  maxWidth: "128px",
  marginBlock: "$44 $14",
});
