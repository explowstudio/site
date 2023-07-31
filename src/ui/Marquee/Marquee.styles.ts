import { styled, keyframes } from "@/ui/stitches.config";

const marquee = keyframes({
  from: {
    transform: "translateX(0)",
  },

  to: {
    transform: "translateX(-100%)",
  },
});

export const Root = styled("div", {
  position: "relative",

  display: "flex",
  overflow: "hidden",

  width: "100vw",

  variants: {
    gradient: {
      true: {
        "&::before": {
          content: "",
          position: "absolute",
          left: 0,
          background: "linear-gradient(to right, #101010, #10101000)",
          height: "300px",
          width: "50%",
          zIndex: "$top",
        },

        "&::after": {
          content: "",
          position: "absolute",
          right: 0,
          background: "linear-gradient(to left, #101010, #10101000)",
          height: "300px",
          width: "50%",
          zIndex: "$top",
        },
      },
    },
  },
});

export const Container = styled("div", {
  display: "flex",
  flex: "0 0 auto",

  minWidth: "auto",
  animation: `${marquee} 10s linear infinite`,
});
