import { styled } from "@/ui/stitches.config";

export const Container = styled("section", {
  background: "$black",
  paddingTop: "$36",

  "@md": {
    paddingTop: "$20",
  },
});

export const Title = styled("h1", {
  fontSize: "$4xl",
  lineHeight: "$4xl",
  fontWeight: "$medium",
  color: "$white",

  maxWidth: "958px",

  "@md": {
    fontSize: "$1xl",
    lineHeight: "$1xl",
    maxWidth: "450px",
  },

  "@sm": {
    fontSize: "$xl",
    lineHeight: "$xl",
  },
});

export const Content = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  marginTop: "$24",

  "@lg": {
    alignItems: "flex-start",
    flexDirection: "column",
    gap: "$20",
    marginTop: "$12",
  },

  "> img": {
    width: "100%",
    height: "fit-content",
  },
});

export const CultureList = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "$12",

  maxWidth: "442px",
  width: "100%",
});

export const CultureListItem = styled("li", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",

  "> strong": {
    fontSize: "$lg",
    lineHeight: "$lg",
    fontWeight: "$bold",
    color: "$white",
  },

  "> p": {
    fontSize: "$sm",
    lineHeight: "$sm",
    color: "$gray300",
  },
});

export const Row = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$6",

  paddingLeft: "$6",

  span: {
    color: "$white",
    fontSize: "$1xl",
    lineHeight: "$1xl",
    fontWeight: "$medium",
  },
});
