import { styled } from "@/ui/stitches.config";

export const Container = styled("div", {
  display: "flex",
  gap: "$16",

  marginTop: "$16",
});

export const StatItem = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const StatItemAmount = styled("h1", {
  display: "inline-flex",
  alignItems: "baseline",

  fontSize: "88px",
  lineHeight: "normal",
  fontWeight: "$medium",
});

export const StatsItemIcon = styled("div", {
  height: "40px",
  width: "40px",
  borderRadius: "50%",

  background: "$gray50",

  display: "grid",
  placeItems: "center",

  transform: "translateX(-26px)",
});

export const StatItemTitle = styled("strong", {
  fontSize: "$xl",
  lineHeight: "$xl",
  fontWeight: "$medium",
});

export const StatItemDescription = styled("small", {
  fontSize: "$md",
  lineHeight: "$md",
  color: "$gray500",

  marginTop: "$1",
});
