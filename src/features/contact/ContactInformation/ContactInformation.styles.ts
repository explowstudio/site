import { styled } from "@/ui/stitches.config";

export const Container = styled("div", {
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
