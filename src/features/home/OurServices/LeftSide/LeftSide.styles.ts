import { styled } from "@/ui/stitches.config";

export const Row = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$6",

  marginTop: "$60",
});

export const Copyright = styled("span", {
  fontSize: "$sm",
  lineHeight: "$sm",
  color: "$white",
  textTransform: "uppercase",
});

export const Icon = styled("div", {
  width: "26px",
  height: "26px",

  borderRadius: "50%",
  background: "$white",

  display: "grid",
  placeItems: "center",
});
