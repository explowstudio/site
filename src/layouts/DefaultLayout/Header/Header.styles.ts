import { motion } from "framer-motion";

import { CaretDown } from "@phosphor-icons/react";

import { Grid } from "@/ui";
import { styled } from "@/ui/stitches.config";

export const Container = styled(motion.header, {
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: "$fixed",

  left: "50%",
  transform: "translateX(-50%)",
  transition: "$default",
  border: "1px solid transparent",

  variants: {
    color: {
      primary: {
        background: "$gray50",
      },
      secondary: {
        background: "$black",
      },
      transparent: {
        background: "transparent",
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },
});

export const Content = styled(Grid, {
  height: "82px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const NavigationList = styled("ul", {
  display: "flex",
  alignItems: "center",
  gap: "$9",

  "@sm": {
    display: "none",
  },
});

export const CaretDownIcon = styled(CaretDown, {
  transition: "$default",
});
