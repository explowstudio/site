import { styled } from "@/ui/stitches.config";

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
