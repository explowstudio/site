import * as RadioGroup from "@radix-ui/react-radio-group";

import { styled } from "@/ui/stitches.config";

export const Wrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$3",
});

export const Container = styled(RadioGroup.Item, {
  background: "$white",
  height: "20px",
  width: "20px",

  borderRadius: "50%",
  border: "1px solid $gray200",

  display: "grid",
  placeItems: "center",

  transition: "all 0.2s",

  '&:hover, &[data-state="checked"]': {
    borderColor: "$gray800",
  },
});

export const Indicator = styled(RadioGroup.Indicator, {
  background: "$gray800",
  borderRadius: "50%",

  width: "10px",
  height: "10px",

  display: "flex",
});

export const Label = styled("label", {
  color: "$black",
  fontWeight: "$medium",
  cursor: "pointer",
});
