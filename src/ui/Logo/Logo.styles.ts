import { styled } from "@/ui/stitches.config";
import Link from "next/link";

export const Root = styled(Link, {
  display: "grid",
  placeItems: "center",

  transition: "$default",

  "&:hover": {
    opacity: 0.8,
  },

  "&:focus": {
    opacity: 0.6,
  },
});
