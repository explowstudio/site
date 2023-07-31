import { styled } from "@/ui/stitches.config";

export const Container = styled("section", {
  background: "$gray50",
  paddingBlock: "$20 $10",

  "@md": {
    paddingBlock: "$10",
  },
});

export const Title = styled("h1", {
  fontSize: "110px",
  lineHeight: "100%",
  fontWeight: "$semiBold",

  display: "inline-flex",
  alignItems: "flex-end",

  "@md": {
    fontSize: "$2xl",
    lineHeight: "$2xl",
    alignItems: "flex-start",
  },

  "@xs": {
    fontSize: "$1xl",
    lineHeight: "$1xl",
  },

  "@media (min-width: 667px) and (max-width: 888px)": {
    fontSize: "$4xl",
    lineHeight: "$4xl",
    alignItems: "baseline",
  },
});

export const BaseRow = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

export const Content = styled(BaseRow, {
  marginTop: "$20",
  alignItems: "flex-start",
  gap: "$6",

  "@sm": {
    flexDirection: "column-reverse",
    marginTop: "$8",
  },

  "@media (min-width: 667px) and (max-width: 888px)": {
    marginTop: "$8",
  },
});

export const DesignAndCodeAndBusiness = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",

  "@sm": {
    width: "100%",
    marginTop: "$8",
    justifyContent: "space-between",
  },

  "> span": {
    fontSize: "$sm",
    lineHeight: "$sm",
    fontWeight: "$medium",
    textTransform: "uppercase",
  },
});

export const IconGroup = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",
});

export const Description = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",

  maxWidth: "515px",

  "@md": {
    maxWidth: "312px",
  },

  "> h2": {
    fontSize: "$2xl",
    lineHeight: "$2xl",
    fontWeight: "$semiBold",

    "@md": {
      fontSize: "$lg",
      lineHeight: "$lg",
    },
  },

  "> p": {
    color: "$gray600",
    fontSize: "$lg",
    lineHeight: "$lg",

    "@md": {
      fontSize: "$md",
      lineHeight: "$md",
    },
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
