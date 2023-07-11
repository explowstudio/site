import { Grid } from "@/ui";

import { styled } from "@/ui/stitches.config";

export const Container = styled("header", {
  background: "$gray50",
});

export const Content = styled(Grid, {
  height: "82px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const NavigationList = styled("ul", {
  display: "flex",
  alignItems: "center",
  gap: "$9",
});
