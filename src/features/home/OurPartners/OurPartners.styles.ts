import { Grid } from "@/ui";
import { styled } from "@/ui/stitches.config";

export const Container = styled(Grid, {
  paddingBlock: "$24",
});

export const Title = styled("h1", {
  fontSize: "$3xl",
  lineHeight: "$3xl",
  fontWeight: "$semiBold",

  marginTop: "$5",
  maxWidth: "520px",
});

export const Description = styled("p", {
  color: "$gray500",
  maxWidth: "624px",
  marginTop: "$6",
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
