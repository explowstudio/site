import { styled } from "@/ui/stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$8",
});

export const Title = styled("h2", {
  color: "$gray400",

  fontSize: "$3xl",
  lineHeight: "$3xl",
  fontWeight: "$medium",

  "@sm": {
    fontSize: "$lg",
    lineHeight: "$lg",
  },

  "> span": {
    color: "$white",
  },
});

export const Description = styled("p", {
  color: "$white",
  fontSize: "$xl",
  lineHeight: "$xl",

  "@md": {
    fontSize: "$lg",
    lineHeight: "$lg",
  },
});
