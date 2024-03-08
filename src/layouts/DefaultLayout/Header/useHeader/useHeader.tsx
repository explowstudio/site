import { ComponentProps, useEffect } from "react";
import { useMotionValue, useScroll, useTransform } from "framer-motion";

import { theme } from "@/ui/stitches.config";

import { Container } from "../Header.styles";
import { useBreakpointMatches } from "@/lib";

type Props = {
  color: ComponentProps<typeof Container>["color"];
};

const BACKGROUND_COLOR = {
  initial: {
    transparent: "transparent",
    primary: theme.colors.gray50.value,
    secondary: theme.colors.black.value,
  },
  animate: {
    transparent: theme.colors.white.value,
    primary: theme.colors.white.value,
    secondary: theme.colors.black.value,
  },
} as any;

const COLOR = {
  initial: {
    transparent: theme.colors.white.value,
    primary: theme.colors.black.value,
    secondary: theme.colors.white.value,
  },
  animate: {
    transparent: theme.colors.black.value,
    primary: theme.colors.black.value,
    secondary: theme.colors.white.value,
  },
} as any;

const BORDER_COLOR = {
  initial: {
    transparent: "rgba(248, 248, 248, 0.20)",
    primary: "transparent",
    secondary: "transparent",
  },
  animate: {
    transparent: theme.colors.gray100.value,
    primary: theme.colors.gray100.value,
    secondary: theme.colors.gray800.value,
  },
} as any;

export function useHeader({ color = "primary" }: Props) {
  const { scrollY } = useScroll();

  const isMatches = useBreakpointMatches("1xl");

  const headerStyles = {
    initial: {
      maxWidth: "100vw",
      top: 0,
      color: COLOR.initial[color as any],
      backgroundColor: BACKGROUND_COLOR.initial[color as any],
      borderRadius: 0,
      borderColor: BORDER_COLOR.initial[color as any],
    },
    animate: {
      maxWidth: isMatches ? "calc(100% - 32px)" : "1225px",
      top: "20px",
      color: COLOR.animate[color as any],
      backgroundColor: BACKGROUND_COLOR.animate[color as any],
      borderRadius: "40px",
      borderColor: BORDER_COLOR.animate[color as any],
    },
  };

  function getStyles(newScrollY: number) {
    return (field: keyof typeof headerStyles.initial) => {
      if (newScrollY > 100) {
        return headerStyles.animate[field];
      }

      return headerStyles.initial[field];
    };
  }

  const maxWidth = useTransform(scrollY, (newScrollY) =>
    getStyles(newScrollY)("maxWidth"),
  );

  const top = useTransform(scrollY, (newScrollY) =>
    getStyles(newScrollY)("top"),
  );

  const backgroundColor = useTransform(scrollY, (newScrollY) =>
    getStyles(newScrollY)("backgroundColor"),
  );

  const borderRadius = useTransform(scrollY, (newScrollY) =>
    getStyles(newScrollY)("borderRadius"),
  );

  const borderColor = useTransform(scrollY, (newScrollY) =>
    getStyles(newScrollY)("borderColor"),
  );

  const logoColor = useTransform(scrollY, (newScrollY) =>
    getStyles(newScrollY)("color"),
  );

  return {
    maxWidth,
    top,
    backgroundColor,
    borderRadius,
    borderColor,
    logoColor,
  };
}
