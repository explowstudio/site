import { styled } from "@/ui/stitches.config";

export const IconButton = styled("button", {
  display: "grid",
  placeItems: "center",

  height: "40px",
  width: "40px",

  color: "$black",
  background: "transparent",
  border: `1px solid $gray100`,

  borderRadius: "50%",

  transition: "$default",

  "&:hover, &:focus": {
    background: "$black",
    color: "$white",
  },
});
