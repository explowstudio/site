import { ComponentProps } from "react";
import { useScroll, useTransform } from "framer-motion";

import { theme } from "@/ui/stitches.config";

import { Container } from "../Header.styles";
import { useBreakpointMatches } from "@/lib";

type Props = {
  color: ComponentProps<typeof Container>["color"];
};

export function useHeader({ color }: Props) {
  const { scrollY } = useScroll();

  const isMatches = useBreakpointMatches("1xl");

  const headerStyles = {
    initial: {
      maxWidth: "100vw",
      top: 0,
      backgroundColor:
        color === "primary"
          ? theme.colors.gray50.value
          : theme.colors.black.value,
      borderRadius: 0,
      borderColor: "transparent",
    },
    animate: {
      maxWidth: isMatches ? "calc(100% - 32px)" : "1225px",
      top: "20px",
      backgroundColor:
        color === "primary"
          ? theme.colors.white.value
          : theme.colors.black.value,
      borderRadius: "40px",
      borderColor:
        color === "primary"
          ? theme.colors.gray100.value
          : theme.colors.gray800.value,
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

  return {
    maxWidth,
    top,
    backgroundColor,
    borderRadius,
    borderColor,
  };
}
