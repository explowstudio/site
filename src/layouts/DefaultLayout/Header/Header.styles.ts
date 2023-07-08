import { styled } from "@/ui/stitches.config";

export const Container = styled("header", {
  background: "$gray50",
});

export const Content = styled("div", {
  maxWidth: "1225px",
  marginInline: "auto",

  height: "82px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const NavigationList = styled("ul", {
  display: "flex",
  alignItems: "center",
  gap: "$9",
});

export const NavigationItem = styled("li", {
  position: "relative",

  display: "flex",
  alignItems: "center",
  gap: "$2",

  color: "$black",

  fontSize: "$sm",
  lineHeight: "$sm",
  fontWeight: "$medium",

  transition: "$default",

  variants: {
    linkUnderline: {
      true: {
        "&:hover::after": {
          transform: "scale(1)",
          transformOrigin: "left",
        },

        "&::after": {
          content: "",
          position: "absolute",
          bottom: "-4px",
          left: 0,
          width: "100%",
          height: "1px",
          background: "$black",
          transform: "scaleX(0)",
          transformOrigin: "right",
          transition: "transform .4s $easeOutCubic",
          willChange: "transform",
        },
      },
    },
  },

  defaultVariants: {
    linkUnderline: true,
  },
});
