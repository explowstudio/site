import { Grid } from "@/ui";
import { styled } from "@/ui/stitches.config";

import { Wrapper as Dropdown } from "./Dropdown/Dropdown.styles";
import { CaretDown } from "@phosphor-icons/react";

export const Container = styled("header", {
  width: "100%",
  position: "sticky",
  top: 0,
  zIndex: "$fixed",

  background: "$gray50",
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
});
