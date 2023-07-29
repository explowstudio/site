import { Marquee } from "@/ui";
import { styled } from "@/ui/stitches.config";

export const Root = styled(Marquee.Root, {
  background: "$black",
  borderBottom: "1px solid $gray800",
  height: "120px",

  display: "flex",
  alignItems: "center",
});

export const Row = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "104px",

  paddingLeft: "104px",
});

export const PartnerLogo = styled("img", {
  filter: "invert(100%)",
});
