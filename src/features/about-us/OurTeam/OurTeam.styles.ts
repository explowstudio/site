import { styled } from "@/ui/stitches.config";

export const Container = styled("section", {
  background: "$black",
  paddingBlock: "$36 $20",

  "@md": {
    paddingBlock: "$20 $28",
    marginBottom: "$20",
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
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  columnGap: "$36",
  rowGap: "$10",

  "@1xl": {
    columnGap: "$8",
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@md": {
    gridTemplateColumns: "1fr",
    marginTop: "$24",
  },
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

  "@1xl": {
    "&:nth-child(1n+2)": {
      paddingTop: "62px",
    },

    "&:nth-child(2n)": {
      paddingTop: "110px",
    },
  },

  "@lg": {
    paddingTop: "0 !important",
  },
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
  fontSize: "$sm",
  lineHeight: "$sm",
  marginTop: "$4",
});
