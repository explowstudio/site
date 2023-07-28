import { styled, keyframes } from "@/ui/stitches.config";

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },

  to: {
    opacity: 1,
  },
});

const Root = styled("div", {
  borderRadius: "8px",
  animation: `${fadeIn} 0.3s forwards`,

  variants: {
    variant: {
      error: {
        background: "$red100",
        border: "1px solid $red300",
      },
      warning: {
        background: "$yellow100",
        border: "1px solid $yellow300",
      },
    },
    size: {
      small: {
        padding: "$2 $4",
      },
      medium: {
        padding: "$4 $6",
      },
    },
  },

  defaultVariants: {
    size: "medium",
  },
});

const Title = styled("strong", {
  fontWeight: "$semiBold",
});

export const Description = styled("p", {
  marginTop: "$3",
  color: "$gray800",

  small: {
    display: "inline-flex",
    gap: "$1",

    "&:last-child": {
      marginTop: "$1",
    },
  },
});

export const Alert = {
  Root,
  Title,
  Description,
};
