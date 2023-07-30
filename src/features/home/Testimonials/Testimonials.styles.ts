import { Grid } from "@/ui";
import { Quote } from "@/ui/_icons/Quote";
import { styled } from "@/ui/stitches.config";

export const Container = styled(Grid, {
  display: "flex",
  flexDirection: "column",
  gap: "$8",
  paddingBottom: "$24",

  "@md": {
    paddingBlock: "$10",
  },
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

export const Content = styled("p", {
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

export const DotsHorizontal = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$3",
});

export const DotButton = styled("button", {
  height: "10px",
  width: "10px",

  border: 0,
  borderRadius: "50%",
  background: "$gray100",

  transition: "$default",

  variants: {
    active: {
      true: {
        background: "$black",
      },
    },
  },
});
