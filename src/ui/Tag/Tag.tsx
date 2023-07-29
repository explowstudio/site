import { styled } from "@/ui/stitches.config";

export const Tag = styled("span", {
  height: "44px",
  borderRadius: "25px",

  background: "transparent",
  border: "1px solid $white",

  paddingInline: "$6",

  display: "grid",
  placeItems: "center",
  width: "fit-content",

  color: "$white",
  fontSize: "$md",
  lineHeight: "$md",

  textTransform: "uppercase",
});
