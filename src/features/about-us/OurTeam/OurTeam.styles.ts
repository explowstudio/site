import { styled } from "@/ui/stitches.config";

export const Container = styled("section", {
  background: "$black",
  paddingBlock: "$36",
  marginBottom: "$20",

  "@md": {
    paddingBlock: "$20 $28",
  },
});

export const TitleGroup = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$8",
});

export const Title = styled("h1", {
  fontSize: "$4xl",
  lineHeight: "$4xl",
  fontWeight: "$medium",
  color: "$white",

  maxWidth: "760px",

  "@md": {
    fontSize: "$1xl",
    lineHeight: "$1xl",
  },
});

export const SubTitle = styled("h3", {
  color: "$gray200",

  fontSize: "$1xl",
  lineHeight: "$1xl",
  fontWeight: "$regular",
});

export const TeamList = styled("ul", {
  marginTop: "$36",
  display: "flex",
  flexDirection: "column",
  rowGap: "100px",

  "@md": {
    marginTop: "$24",
  },
});

export const TeamListItem = styled("li", {
  display: "flex",
  gap: "$12",

  "@md": {
    flexDirection: "column",
  },
});

export const FounderInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const FullName = styled("strong", {
  fontSize: "$2xl",
  lineHeight: "$2xl",
  fontWeight: "$semiBold",
  color: "$white",

  marginTop: "$6",

  display: "inline-flex",
  alignItems: "flex-end",
  justifyContent: "space-between",

  "> a": {
    color: "$white",
    transition: "$default",

    "&:hover": {
      color: "$salmon500",
    },
  },
});

export const Role = styled("small", {
  fontSize: "$sm",
  lineHeight: "$sm",
  fontWeight: "$semiBold",
  color: "$white",
  marginTop: "$2",
});

export const Description = styled("p", {
  color: "$gray200",
  fontSize: "$lg",
  lineHeight: "$lg",
  marginTop: "$4",
});

export const ImageRoot = styled("div", {
  position: "relative",
});

export const LinkedInButton = styled("a", {
  position: "absolute",
  right: "22px",
  top: "22px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  color: "$white",
  background: "$black",
  borderRadius: "50%",
  height: "40px",
  width: "40px",
});
