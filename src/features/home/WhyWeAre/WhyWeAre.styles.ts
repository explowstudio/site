import { Grid } from "@/ui";
import { styled } from "@/ui/stitches.config";

export const Container = styled(Grid, {
  display: "grid",
  gridTemplateColumns: "1.3fr 2fr",

  paddingBlock: "$48",
});

export const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
});
