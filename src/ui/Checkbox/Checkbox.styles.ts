import * as Checkbox from "@radix-ui/react-checkbox";
import { styled } from "@/ui/stitches.config";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  columnGap: "$4",
});

export const Root = styled(Checkbox.Root, {
  boxShadow: "$xs",
  height: "20px",
  width: "20px",
  background: "$white",
  border: "1px solid $gray100",
  borderRadius: "$small",
  transition: "all 0.2s",

  "&:not(:disabled):hover": {
    border: "3px solid rgba(35, 55, 55, 0.05)",
  },

  "&:focus": {
    borderColor: "$gray400",
  },

  '&[data-state="checked"]': {
    borderColor: "$gray800",
    backgroundColor: "$gray800",
    color: "$white",
  },
});

export const Indicator = styled(Checkbox.Indicator, {
  display: "grid",
  placeItems: "center",
});

export const Label = styled("label", {
  color: "$black",
  fontWeight: "$medium",
  cursor: "pointer",
});
