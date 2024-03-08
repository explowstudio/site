import { Grid } from "@/ui";
import { styled } from "@/ui/stitches.config";

export const Container = styled(Grid, {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBlock: "124px 86px",
});

export const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$12",
});

export const LocationRoot = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",

  "> h3": {
    color: "$gray800",
    fontSize: "$1xl",
    lineHeight: "$1xl",
    fontWeight: "$semiBold",
  },

  "> h4": {
    color: "$gray600",
    fontSize: "$lg",
    lineHeight: "$lg",
    fontWeight: "$regular",

    display: "flex",
    alignItems: "center",

    "> svg": {
      marginRight: "$2",
      height: "20px",
    },
  },
});

export const DeliveredRoot = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  listStyle: "inherit",

  "> strong": {
    fontSize: "$1xl",
    lineHeight: "$1xl",
    color: "$gray800",
    fontWeight: "$semiBold",
    marginBottom: "$2",
  },

  "> li": {
    marginLeft: "18px",
    color: "$gray600",
    fontSize: "$lg",
    lineHeight: "$lg",
  },
});

export const Paragraph = styled("p", {
  color: "$gray600",
  fontSize: "$lg",
  lineHeight: "$lg",
  fontWeight: "$regular",
});
