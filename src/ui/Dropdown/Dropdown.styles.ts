import { styled } from "@/ui/stitches.config";

export const Container = styled("nav", {
  position: "absolute",
  display: "inline-block",
  zIndex: "2",
});

export const Content = styled("div", {
  display: "none",
  backgroundColor: "#f9f9f9",
  padding: "106px",
  top: "50px",
  height: "418px",
  columnGap: "80px",
  borderBottom: "1px solid $gray100",
});

export const List = styled("ul", {
  display: "flex",
  flexDirection: "column",
});
