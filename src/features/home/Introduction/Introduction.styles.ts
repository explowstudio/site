import { styled } from "@/ui/stitches.config";

export const Container = styled("section", {
  background: "$gray50",

  paddingBlock: "$20 $10",
});

export const Title = styled("h1", {
  fontSize: "128px",
  lineHeight: "100%",
  fontWeight: "$semiBold",

  display: "inline-flex",
  alignItems: "flex-end",
});

export const TitleWithIcon = styled("div", {
  display: "flex",
  alignItems: "flex-end",

  marginLeft: "$6",
});

export const TitleIcon = styled("div", {
  height: "72px",
  width: "72px",
  borderRadius: "50%",

  display: "grid",
  placeItems: "center",

  marginBottom: "$3",

  variants: {
    color: {
      salmon: {
        background: "$salmon500",
      },
      purple: {
        background: "$purple500",
        color: "$white",
        transform: "translateX(-16px)",
      },
    },
  },
});

export const Row = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

export const DesignAndCodeAndBusiness = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",

  "> span": {
    fontSize: "$sm",
    lineHeight: "$sm",
    fontWeight: "$medium",
    textTransform: "uppercase",
  },
});

export const Description = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",

  maxWidth: "515px",

  "> h2": {
    fontSize: "$2xl",
    lineHeight: "$2xl",
    fontWeight: "$semiBold",
  },

  "> p": {
    color: "$gray600",
    fontSize: "$lg",
    lineHeight: "$lg",
  },
});

export const KeepExploring = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",

  color: "$gray700",

  "> span": {
    fontSize: "$sm",
    lineHeight: "$sm",
    fontWeight: "$medium",
  },
});

export const SocialMedia = styled("ul", {
  display: "flex",
  alignItems: "center",
  gap: "$4",
});
