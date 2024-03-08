import { FadeIn } from "@/ui/_transitions";
import { styled } from "@/ui/stitches.config";

export const Container = styled("section", {
  background: "url(/textures/hero.png)",
  paddingBlock: "$40 $10",
  backgroundSize: "cover",

  "@md": {
    paddingBlock: "$40 $20",
  },
});

export const Title = styled("h1", {
  fontSize: "110px",
  lineHeight: "100%",
  fontWeight: "$semiBold",

  display: "inline-flex",
  alignItems: "flex-end",
  color: "$white",

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

export const BaseRow = styled(FadeIn, {
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
  color: "$white",

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
  color: "$white",

  maxWidth: "515px",

  "@md": {
    maxWidth: "312px",
  },

  "> h2": {
    fontSize: "$1xl",
    lineHeight: "$1xl",
    fontWeight: "$semiBold",

    "@md": {
      fontSize: "$lg",
      lineHeight: "$lg",
    },
  },

  "> p": {
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

  color: "$white",

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
