import { ComponentProps, ReactNode } from "react";

import * as S from "./Marquee.styles";

function Content({ children }: ComponentProps<typeof S.Container>) {
  return (
    <>
      <S.Container>{children}</S.Container>
      <S.Container>{children}</S.Container>
      <S.Container>{children}</S.Container>
    </>
  );
}

export const Marquee = {
  Root: S.Root,
  Content,
};
