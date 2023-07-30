import { styled } from "@/ui/stitches.config";

export const Title = styled("h2", {
  fontSize: "$2xl",
  lineHeight: "$2xl",
  fontWeight: "$medium",

  marginBottom: "$6",

  "@md": {
    marginTop: "$20",
    fontSize: "$xl",
    lineHeight: "$xl",
  },

  "@media (min-width: 667px)": {
    marginTop: 0,
  },
});

export const Description = styled("p", {
  fontSize: "$lg",
  lineHeight: "$lg",

  color: "$gray500",

  "@md": {
    fontSize: "$md",
    lineHeight: "$md",
  },

  "&:not(:last-child)": {
    marginBottom: "$4",
  },

  "> b": {
    color: "$black",
  },
});
