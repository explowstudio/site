import { styled } from "@/ui/stitches.config";

export const Container = styled("section", {
  background: "$black",
  paddingBlock: "$20 $32",
  marginBottom: "$24",

  "@md": {
    paddingBlock: "$10 $20",
  },
});

export const Title = styled("h1", {
  fontSize: "110px",
  lineHeight: "100%",
  fontWeight: "$semiBold",

  display: "inline-flex",
  alignItems: "flex-end",

  color: "$white",

  "@md": {
    fontSize: "$2xl",
    lineHeight: "$2xl",
    alignItems: "flex-start",
  },

  "@xs": {
    fontSize: "$1xl",
    lineHeight: "$1xl",
  },

  "@media (min-width: 667px) and (max-width: 888px)": {
    fontSize: "$4xl",
    lineHeight: "$4xl",
    alignItems: "baseline",
  },
});

export const Description = styled("p", {
  color: "$gray200",
  fontSize: "$md",
  lineHeight: "$md",
  marginTop: "$16",
  maxWidth: "717px",

  "@md": {
    marginTop: "$10",
  },
});
