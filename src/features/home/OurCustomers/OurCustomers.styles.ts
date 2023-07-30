import { Grid } from "@/ui";

import { styled } from "@/ui/stitches.config";

export const Container = styled(Grid, {
  paddingBottom: "$48",

  "@md": {
    paddingBlock: "$24",
  },
});

export const Header = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const SectionTitle = styled("div", {
  maxWidth: "447px",
});
