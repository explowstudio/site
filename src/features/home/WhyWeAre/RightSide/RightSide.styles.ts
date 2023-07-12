import { styled } from "@/ui/stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const Title = styled("h2", {
  fontSize: "$2xl",
  lineHeight: "$2xl",
  fontWeight: "$medium",

  marginBottom: "$6",
});

export const Description = styled("p", {
  fontSize: "$lg",
  lineHeight: "$lg",

  color: "$gray500",

  "&:not(:last-child)": {
    marginBottom: "$4",
  },

  "> b": {
    color: "$black",
  },
});
