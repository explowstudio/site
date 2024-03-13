import { motion } from "framer-motion";

import { Grid } from "@/ui";
import { Quote } from "@/ui/_icons/Quote";
import { styled } from "@/ui/stitches.config";
import { FadeIn } from "@/ui/_transitions";

export const Container = styled(Grid, {
  display: "flex",
  flexDirection: "column",
  gap: "$8",
  paddingBlock: "$24",

  "@md": {
    paddingBlock: "$10",
  },
});

export const Content = styled(FadeIn.WhileInView, {
  display: "flex",
  flexDirection: "column",
  gap: "$8",
});

export const QuoteIcon = styled(Quote, {
  width: "55px",
  height: "55px",
  color: "$gray100",

  "@md": {
    width: "32px",
    height: "32px",
  },
});

export const Description = styled("p", {
  fontSize: "$3xl",
  lineHeight: "$3xl",

  maxWidth: "90%",

  "@md": {
    fontSize: "$md",
    lineHeight: "$md",
  },

  "@media (min-width: 667px) and (max-width: 888px)": {
    fontSize: "$1xl",
    lineHeight: "$1xl",
  },
});

export const Person = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$8",

  "@md": {
    gap: "$3",
  },
});

export const PersonTitle = styled("strong", {
  fontSize: "$3xl",
  lineHeight: "$3xl",
  fontWeight: "$medium",

  "@md": {
    fontSize: "$2xl",
    lineHeight: "$2xl",
  },
});

export const PersonDescription = styled("span", {
  fontSize: "$lg",
  lineHeight: "$lg",
  color: "$gray500",
});

export const DotsHorizontal = styled(motion.div, {
  display: "flex",
  alignItems: "center",
  gap: "$3",
});

export const DotButton = styled(motion.button, {
  height: "10px",
  width: "10px",

  border: 0,
  borderRadius: "50%",
  background: "$gray100",

  transition: "$default",

  "&:hover": {
    background: "$gray200",
  },

  "&:focus": {
    background: "$gray400",
  },

  variants: {
    active: {
      true: {
        background: "$black !important",
      },
    },
  },
});
