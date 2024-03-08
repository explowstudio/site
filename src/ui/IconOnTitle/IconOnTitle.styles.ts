import { styled } from "@/ui/stitches.config";
import { Asterisk, Lightning } from "@phosphor-icons/react";

export const TitleWithIcon = styled("div", {
  display: "flex",
  alignItems: "flex-end",

  marginLeft: "$6",

  "@md": {
    marginLeft: "$4",
  },

  "@xs": {
    marginLeft: "$2",
  },
});

export const TitleIcon = styled("div", {
  height: "72px",
  width: "72px",
  borderRadius: "50%",

  display: "grid",
  placeItems: "center",

  marginBottom: "$3",

  "@md": {
    height: "42px",
    width: "42px",
  },

  "@xs": {
    height: "32px",
    width: "32px",
  },

  "@media (min-width: 667px) and (max-width: 888px)": {
    height: "48px",
    width: "48px",
  },

  variants: {
    color: {
      salmon: {
        background: "$salmon500",
      },
      purple: {
        background: "$purple500",
        color: "$white",
        transform: "translateX(-16px)",

        "@md": {
          transform: "translateX(-12px)",
        },

        "@xs": {
          transform: "translateX(-8px)",
        },
      },
    },
  },
});

export const AsteriskIcon = styled(Asterisk, {
  width: "44px",
  height: "44px",
  color: "$white",

  "@md": {
    width: "20px",
    height: "20px",
  },

  "@xs": {
    height: "14px",
    width: "14px",
  },
});

export const LightningIcon = styled(Lightning, {
  width: "28px",
  height: "28px",
  color: "$black",

  "@md": {
    width: "20px",
    height: "20px",
  },

  "@xs": {
    height: "14px",
    width: "14px",
  },
});
