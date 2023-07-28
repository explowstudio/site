import { styled } from "@/ui/stitches.config";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",

  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
  },

  defaultVariants: {
    direction: "row",
  },
});
