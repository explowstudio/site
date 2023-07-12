import { ComponentProps } from "react";
import { ArrowRight } from "@phosphor-icons/react";

import { SmallTitle } from "@/ui";

import * as S from "./Section.styles";

export const Section = {
  SmallTitle: ({ children, ...props }: ComponentProps<typeof SmallTitle>) => (
    <SmallTitle {...props}>
      <ArrowRight />
      {children}
    </SmallTitle>
  ),
  Title: S.Title,
  Description: S.Description,
};
