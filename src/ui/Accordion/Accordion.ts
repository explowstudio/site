import { MinusCircle, PlusCircle } from "@phosphor-icons/react";
import * as RadixAccordion from "@radix-ui/react-accordion";

import { keyframes, styled } from "@/ui/stitches.config";

export const Root = styled(RadixAccordion.Root, {
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const Item = styled(RadixAccordion.Item, {
  width: "100%",
});

export const Trigger = styled(RadixAccordion.Trigger, {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "$2",

  width: "100%",

  background: "transparent",
  border: 0,

  "strong::before": {
    content: "",
    background: "$black",
    height: "1.5px",
    transition: "all 0.3s",
    width: 0,
  },

  '&[data-state="open"] strong::before': {
    width: "50px",
    marginRight: "$3",
  },

  '&[data-state="close"] strong::before': {
    width: 0,
    marginRight: 0,
  },

  "&:hover svg": {
    color: "$gray900",
  },
});

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

export const Content = styled(RadixAccordion.Content, {
  overflow: "hidden",
  maxWidth: "95%",

  '&[data-state="open"]': {
    animation: `${slideDown} 0.2s`,
  },

  '&[data-state="closed"]': {
    animation: `${slideUp} 0.2s`,
  },
});

const MinusCircleIcon = styled(MinusCircle, {
  display: "none",
  transition: "all 300ms",

  color: "$gray300",
  minWidth: "24px",

  "[data-state=open] &": { display: "block", color: "$gray900" },
});

const PlusCircleIcon = styled(PlusCircle, {
  display: "none",
  transition: "all 300ms",

  color: "$gray400",
  minWidth: "24px",

  "[data-state=closed] &": { display: "block" },
});

export const Accordion = {
  Root,
  Item,
  Trigger,
  Content,
  MinusCircleIcon,
  PlusCircleIcon,
};
