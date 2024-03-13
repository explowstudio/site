import { Grid } from "@/ui";
import { styled } from "@/ui/stitches.config";

export const Container = styled("div", {
  paddingBlock: "$24",
  background: "$black",

  "@md": {
    paddingBlock: "$8",
  },
});

export const Partners = styled("ul", {
  display: "flex",
  flexWrap: "wrap",
  columnGap: "70px",
  rowGap: "$24",
  marginTop: "$32",

  "@md": {
    gridTemplateColumns: "1fr",
    gap: "$16",
    marginTop: "$16",
  },

  "@media (min-width: 667px) and (max-width: 888px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "$8",
  },
});

export const Partner = styled("li", {
  display: "flex",
  flexDirection: "column",
  gap: "$8",
});

export const PartnerDescription = styled("p", {
  color: "$white",
});
