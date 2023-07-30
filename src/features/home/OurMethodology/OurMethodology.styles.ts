import { styled } from "@/ui/stitches.config";

export const Container = styled("section", {
  paddingTop: "$20",
  background: "$black",

  "@md": {
    display: "none",
  },
});

export const Row = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "$32",
});

export const Description = styled("p", {
  fontSize: "$md",
  lineHeight: "$md",
  color: "$white",

  maxWidth: "472px",
});

export const BottomText = styled("h1", {
  color: "$gray800",
  fontSize: "112px",
  fontWeight: "$bold",
  textTransform: "uppercase",
  letterSpacing: "-1.124px",
  lineHeight: "130.5%",
  whiteSpace: "nowrap",
  marginTop: "$40",
  transform: "translate(-32px, 12px)",
  textAlign: "center",
});
