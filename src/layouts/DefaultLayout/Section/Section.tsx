import { ComponentProps, ComponentType, ElementType } from "react";
import { ArrowRight } from "@phosphor-icons/react";

import { SmallTitle } from "@/ui";

import * as S from "./Section.styles";

type Props<T extends typeof SmallTitle> = {
  as?: T;
} & ComponentProps<T>;

export const Section = {
  SmallTitle: <T extends typeof SmallTitle>({
    children,
    ...props
  }: Props<T>) => (
    <SmallTitle {...props}>
      <ArrowRight />
      {children}
    </SmallTitle>
  ),
  Title: S.Title,
  Description: S.Description,
};
