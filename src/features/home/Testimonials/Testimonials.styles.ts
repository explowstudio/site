import { Grid } from "@/ui";

import { styled } from "@/ui/stitches.config";

export const Container = styled(Grid, {
  display: "flex",
  flexDirection: "column",
  gap: "$8",
  paddingBottom: "$24",
});

export const Content = styled("p", {
  fontSize: "$3xl",
  lineHeight: "$3xl",

  maxWidth: "90%",
});

export const Person = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$8",
});

export const PersonTitle = styled("strong", {
  fontSize: "$3xl",
  lineHeight: "$3xl",
  fontWeight: "$medium",
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
