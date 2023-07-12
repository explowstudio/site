import { Grid } from "@/ui";
import { styled } from "@/ui/stitches.config";

export const Container = styled(Grid, {
  paddingBlock: "$24",
});

export const Partners = styled("ul", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  columnGap: "$40",
  rowGap: "$24",
  marginTop: "$32",
});

export const Partner = styled("li", {
  display: "flex",
  flexDirection: "column",
  gap: "$8",
});

export const PartnerDescription = styled("p", {
  color: "$gray600",
});
