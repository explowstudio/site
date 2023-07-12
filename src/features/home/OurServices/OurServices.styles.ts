import { Grid } from "@/ui";
import { styled } from "@/ui/stitches.config";

export const Container = styled("section", {
  paddingBlock: "$40",
  background: "$black",
});

export const Content = styled(Grid, {
  display: "grid",
  gridTemplateColumns: "1.3fr 2fr",
  gap: "$24",
});
