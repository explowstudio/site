import { styled } from "@/ui/stitches.config";

export const Title = styled("strong", {
  fontSize: "$lg",
  lineHeight: "$lg",
  fontWeight: "$semiBold",
  color: "$gray900",

  display: "flex",
  alignItems: "center",
  textAlign: "left",
});

export const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const Description = styled("p", {
  fontSize: "$md",
  lineHeight: "$md",
  color: "$gray500",
});
