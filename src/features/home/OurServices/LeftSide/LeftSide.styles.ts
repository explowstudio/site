import { styled } from "@/ui/stitches.config";

export const Title = styled("h1", {
  fontSize: "$3xl",
  lineHeight: "$3xl",
  fontWeight: "$semiBold",

  marginTop: "$5",
  color: "$white",
});

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
