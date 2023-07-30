import { styled } from "@/ui/stitches.config";

export const Container = styled("ul", {
  display: "flex",
  gap: "$8",
  marginTop: "$16",

  overflowX: "scroll",
  minWidth: "100vw",
  maxWidth: "unset",

  cursor: "grabbing",
  userSelect: "none",

  paddingRight: "15vw",
  scrollbarWidth: "none",
  "-ms-overflow-style": "none",

  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const CaseItem = styled("li", {
  display: "flex",
  flexDirection: "column",

  maxWidth: "550px",

  "@md": {
    maxWidth: "350px",
  },
});

export const CaseItemImage = styled("img", {
  width: "550px",
  height: "640px",

  "@md": {
    width: "350px",
    height: "406px",
  },
});

export const CaseItemTitle = styled("strong", {
  fontSize: "$2xl",
  lineHeight: "$2xl",
  fontWeight: "$semiBold",

  marginBlock: "$8 $3",
});

export const CaseItemDescription = styled("small", {
  color: "$gray500",

  fontSize: "$md",
  lineHeight: "$md",
});

export const Tags = styled("div", {
  display: "flex",
  gap: "$2",
  marginTop: "20px",
});

export const CaseTag = styled("span", {
  fontSize: "$sm",
  lineHeight: "$sm",
  fontWeight: "$medium",

  padding: "$1 $4",
  background: "$gray50",

  borderRadius: "24px",
});
