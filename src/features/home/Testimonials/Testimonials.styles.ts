import { Quote } from "@/ui/_icons/Quote";
import { styled } from "@/ui/stitches.config";
import { FadeIn } from "@/ui/_transitions";

export const Container = styled("section", {
  paddingBlock: "$24 $6",
  background: "$black",
  marginBottom: "$28",

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
  color: "$white",

  "@md": {
    width: "32px",
    height: "32px",
  },
});

export const Description = styled("p", {
  fontSize: "$3xl",
  lineHeight: "$3xl",
  color: "$white",
  maxWidth: "90%",
  minHeight: "220px",

  "@md": {
    fontSize: "$1xl",
    lineHeight: "$1xl",
    minHeight: "auto",
  },

  "@media (min-width: 667px) and (max-width: 888px)": {
    fontSize: "$1xl",
    lineHeight: "$1xl",
  },
});

export const PersonRoot = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$6",
});

export const PersonAvatar = styled("img", {
  height: "90px",
  width: "90px",
  borderRadius: "50%",
  objectFit: "cover",
});

export const Person = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",

  "@md": {
    gap: "$3",
  },
});

export const PersonTitle = styled("strong", {
  fontSize: "$3xl",
  lineHeight: "$3xl",
  fontWeight: "$medium",
  color: "$white",

  "@md": {
    fontSize: "$2xl",
    lineHeight: "$2xl",
  },
});

export const PersonDescription = styled("span", {
  fontSize: "$lg",
  lineHeight: "$lg",
  color: "$white",
});

export const PaginationRoot = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$3",
  color: "$white",

  "> button": {
    background: "transparent",
    border: "1px solid $gray700",
    height: "54px",
    width: "54px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "$white",
    transition: "all 0.3s ease-in-out",

    "&:hover": {
      background: "$white",
      color: "$black",
    },
  },
});

export const BottomRoot = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$6",

  "@md": {
    display: "none",
  },

  strong: {
    color: "$white",
    fontSize: "72px",
    lineHeight: "108px",
    fontWeight: "$medium",
  },
});
