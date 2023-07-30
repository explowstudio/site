import { Grid } from "@/ui";
import { styled } from "@/ui/stitches.config";

export const Wrapper = styled("section", {
  display: "flex",
  flexDirection: "column",

  paddingBlock: "$48",

  "@md": {
    paddingBlock: "$10",
  },

  "@media (min-width: 667px) and (max-width: 888px)": {
    paddingTop: "$24",
    paddingBottom: 0,
  },
});

export const Container = styled(Grid, {
  display: "grid",
  gridTemplateColumns: "1.3fr 2fr",
  width: "100%",

  "@md": {
    gridTemplateColumns: "1fr",
  },

  "@media (min-width: 667px)": {
    gridTemplateColumns: "0.7fr 1.5fr",
    gap: "$10",
  },
});

export const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const Fragment = styled("div", {
  display: "none",

  "@media (min-width: 888px)": {
    display: "block",
  },
});
