import { styled } from "@/ui/stitches.config";

export const Container = styled("section", {
  background: "$black",
  paddingBlock: "$20",
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
});

export const SubTitle = styled("h3", {
  color: "$gray200",

  fontSize: "$1xl",
  lineHeight: "$1xl",
  fontWeight: "$regular",
});

export const TeamList = styled("ul", {
  marginTop: "$36",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  columnGap: "$36",
  rowGap: "$10",
});

export const TeamListItem = styled("li", {
  display: "flex",
  flexDirection: "column",

  "&:nth-child(3n+2)": {
    paddingTop: "62px",
  },

  "&:nth-child(3n+3)": {
    paddingTop: "110px",
  },
});

export const FullName = styled("strong", {
  fontSize: "$2xl",
  lineHeight: "$2xl",
  fontWeight: "$semiBold",
  color: "$white",

  marginTop: "$6",
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
  fontSize: "$sm",
  lineHeight: "$sm",
  marginTop: "$4",
});
