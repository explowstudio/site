import { styled } from "@/ui/stitches.config";

export const Container = styled("div", {
  display: "flex",
  gap: "$16",

  "@md": {
    marginTop: "$16",
  },

  "@sm": {
    flexDirection: "column",
  },
});

export const StatItem = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  "@sm": {
    alignItems: "center",
    textAlign: "center",
  },
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

  "@md": {
    fontSize: "$lg",
    lineHeight: "$lg",
  },
});

export const StatItemDescription = styled("small", {
  fontSize: "$md",
  lineHeight: "$md",
  color: "$gray500",

  marginTop: "$1",

  "@md": {
    fontSize: "$sm",
    lineHeight: "$sm",
  },
});
