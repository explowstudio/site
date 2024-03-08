import { styled } from "@/ui/stitches.config";

export const Title = styled("h1", {
  fontSize: "$4xl",
  lineHeight: "$4xl",
  color: "$gray900",
  fontWeight: "$semiBold",
  maxWidth: "1000px",
});

export const List = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "$10",
  marginTop: "80px",
});

export const ListItem = styled("li", {
  display: "flex",
  alignItems: "flex-start",
  gap: "$10",
  maxWidth: "890px",
});

export const Number = styled("span", {
  position: "relative",
  minWidth: "70px",

  color: "rgba(247, 188, 178, 0.60)",
  fontSize: "50px",
  lineHeight: "normal",
  fontWeight: "$semiBold",

  "&::after": {
    content: "",
    position: "absolute",
    background: "$white",
    height: "6px",
    width: "100%",
    bottom: 10,
    left: 0,
    zIndex: 1,
  },
});

export const ListItemInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",

  "> strong": {
    fontSize: "$2xl",
    lineHeight: "$2xl",
    fontWeight: "$semiBold",
    color: "$gray800",
  },

  "> p": {
    color: "$gray500",
    fontSize: "$lg",
    lineHeight: "$lg",
  },
});