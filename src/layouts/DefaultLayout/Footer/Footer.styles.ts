import { Grid } from "@/ui";
import { styled } from "@/ui/stitches.config";

export const Wrapper = styled("footer", {
  paddingTop: "$20",
});

export const Container = styled("div", {
  paddingBlock: "$28 $8",
});

export const UpSide = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
});

export const Document = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",

  "> a": {
    fontSize: "$md",
    lineHeight: "$md",
    textDecorationLine: "underline",
    textUnderlineOffset: "6px",
    textDecorationThickness: "1px",

    cursor: "pointer",
    transition: "$default",

    "&:hover": {
      opacity: 0.6,
    },
  },

  "> small": {
    color: "$gray500",
    fontSize: "$sm",
    lineHeight: "$sm",
  },
});

export const Navigation = styled("nav", {
  display: "flex",
  gap: "$48",
  marginRight: "$40",
});

export const NavigationList = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",
});

export const DownSide = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "> small": {
    fontSize: "$sm",
    lineHeight: "$sm",
    color: "$gray500",

    "> b": {
      color: "$black",
    },
  },
});

export const Box = styled(Grid, {
  background: "$black",

  display: "grid",
  placeItems: "center",
  textAlign: "center",

  padding: "$20",
  borderRadius: "16px",

  "> h1": {
    fontSize: "$6xl",
    lineHeight: "$6xl",
    fontWeight: "$semiBold",
    color: "$white",

    maxWidth: "856px",
    marginBottom: "$12",
  },
});
