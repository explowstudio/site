import { styled } from "@/ui/stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const Title = styled("h1", {
  fontSize: "$1xl",
  lineHeight: "$1xl",
  fontWeight: "$semiBold",
});

export const List = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "$12",
});

export const ListItem = styled("li", {
  display: "inline-flex",
  alignItems: "flex-start",
  gap: "$4",

  fontSize: "$lg",
  lineHeight: "$lg",
  color: "$gray400",

  "> span": {
    color: "$black",
    fontWeight: "$medium",
    fontSize: "$lg",
    lineHeight: "$lg",
  },
});
