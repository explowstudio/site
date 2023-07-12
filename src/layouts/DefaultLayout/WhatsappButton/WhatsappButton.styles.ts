import { styled } from "@/ui/stitches.config";
import Link from "next/link";

export const Whatsapp = styled(Link, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "fixed",
  bottom: "20px",
  right: "20px",
  zIndex: "$top",

  width: "70px",
  height: "70px",

  borderRadius: "50%",
  backgroundColor: "$white",
  border: "1px solid $gray100",
  color: "$black",
  transition: "$default",

  "&:hover": {
    backgroundColor: "$black",
    color: "$white",
    transition: "$default",
  },
});
