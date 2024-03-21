import { styled } from "@/ui/stitches.config";

export const Container = styled("ul", {
  display: "flex",
  flexWrap: "wrap",
  columnGap: "$6",
  rowGap: "$10",

  marginTop: "108px",
});

export const CaseItem = styled("li", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",

  maxWidth: "368px",
  width: "100%",

  cursor: "pointer",
});

export const CaseItemInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",

  "> strong": {
    fontSize: "$1xl",
    lineHeight: "$1xl",
    fontWeight: "$semiBold",
    color: "$gray800",
  },

  "> small": {
    fontSize: "$sm",
    lineHeight: "$sm",
    color: "$gray400",
  },
});
