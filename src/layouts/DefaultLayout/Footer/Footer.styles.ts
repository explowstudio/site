import { styled } from "@/ui/stitches.config";

export const Wrapper = styled("footer", {
  padding: "$10",
  background: "url(/textures/hero.png)",
  backgroundSize: "cover",
  marginTop: "$20",

  "@md": {
    padding: "$5",
  },
});

export const Container = styled("div", {
  paddingBlock: "$28 $8",
});

export const Box = styled("div", {
  position: "relative",

  background: "$white",
  borderRadius: "16px",
  paddingBlock: "65px",
});

export const LogoOversized = styled("img", {
  position: "relative",
  transform: "translateY(74px)",
  width: "100%",

  "@md": {
    display: "none",
  },
});

export const Document = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",

  "> a": {
    fontSize: "$md",
    lineHeight: "$md",
    textDecorationLine: "underline",
    textUnderlineOffset: "6px",
    textDecorationThickness: "1px",

    cursor: "pointer",
    transition: "$default",

    "&:hover": {
      opacity: 0.6,
    },
  },

  "> small": {
    color: "$gray500",
    fontSize: "$sm",
    lineHeight: "$sm",

    "&.copyright strong": {
      color: "$black",
    },
  },

  "@md": {
    textAlign: "center",

    "> small.copyright": {
      display: "none",
    },
  },
});

export const Navigation = styled("nav", {
  display: "flex",
  gap: "$48",
  marginRight: "$40",

  "@lg": {
    marginRight: 0,
    gap: "$16",
  },
});

export const NavigationList = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",
});

export const TitleRoot = styled("div", {
  display: "grid",
  placeItems: "center",
  textAlign: "center",

  padding: "$20",
  borderRadius: "16px",

  "@md": {
    padding: "$10 $7",
  },

  "> h1": {
    fontSize: "$5xl",
    lineHeight: "$6xl",
    fontWeight: "$semiBold",
    color: "$white",

    maxWidth: "856px",
    marginBottom: "$12",

    "@md": {
      fontSize: "$2xl",
      lineHeight: "$2xl",
    },
  },
});

export const LetsWorkRoot = styled("svg", {
  position: "absolute",
  top: "-80px",
  right: "45px",

  "@md": {
    width: "90px",
    height: "90px",
    top: "-40px",
    right: "10px",
  },

  "@media (min-width: 667px) and (max-width: 888px)": {
    width: "100px",
    height: "100px",
    top: "-50px",
  },
});
