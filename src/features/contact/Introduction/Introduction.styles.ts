import { styled } from "@/ui/stitches.config";

export const Container = styled("section", {
  background: "$black",
  paddingBlock: "$20 $32",

  "@md": {
    paddingBlock: "$10 $20",
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

export const ContactInformation = styled("div", {
  display: "flex",
  gap: "$9",
  marginTop: "$16",

  "@md": {
    flexDirection: "column",
    marginTop: "$10",
  },
});

export const ScheduleMeeting = styled("div", {
  display: "flex",
  gap: "$3",
});

export const PersonAvatar = styled("img", {
  filter: "grayscale(1)",
  height: "54px",
  width: "54px",
  borderRadius: "50%",
});

export const InformationContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  "> span": {
    color: "$white",
    fontSize: "$md",
    lineHeight: "$md",
    fontWeight: "$medium",
  },
});
