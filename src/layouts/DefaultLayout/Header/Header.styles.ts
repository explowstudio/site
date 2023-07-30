import { CaretDown } from "@phosphor-icons/react";

import { Grid } from "@/ui";
import { styled } from "@/ui/stitches.config";

import { Wrapper as Dropdown } from "./Dropdown/Dropdown.styles";

export const Container = styled("header", {
  width: "100%",
  position: "sticky",
  top: 0,
  zIndex: "$fixed",
  paddingInline: "$2",

  variants: {
    color: {
      primary: {
        background: "$gray50",
      },
      secondary: {
        background: "$black",
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

  "@md": {
    display: "none",
  },
});

export const CaretDownIcon = styled(CaretDown, {
  transition: "$default",
});

export const NavigationItemWithDropdown = styled("li", {
  display: "flex",
  alignItems: "center",
  gap: "$2",

  "&:hover": {
    [`${CaretDownIcon}`]: {
      transform: "rotate(-180deg)",
    },

    [`${Dropdown}`]: {
      opacity: 1,
      visibility: "visible !important",
    },
  },

  variants: {
    color: {
      primary: {
        color: "$black",
      },
      secondary: {
        color: "$gray100",
      },
    },
  },
});
