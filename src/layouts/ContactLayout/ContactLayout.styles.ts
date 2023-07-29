import { Grid } from "@/ui";
import { styled } from "@/ui/stitches.config";

export const Section = styled(Grid, {
  paddingBlock: "$16",
});

export const Title = styled("h1", {
  fontSize: "$3xl",
  lineHeight: "$3xl",
});

export const Description = styled("p", {
  color: "$gray500",
  fontSize: "$md",
  lineHeight: "$md",
  marginTop: "$5",

  maxWidth: "696px",
});

export const FormGroup = styled("div", {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: "$32",
});