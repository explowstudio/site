import { ComponentProps } from "react";

import * as S from "./Radio.styles";

export type RadioProps = {
  label: string;
} & ComponentProps<typeof S.Container>;

export function Radio({ label, value, ...props }: RadioProps) {
  return (
    <S.Wrapper>
      <S.Container id={value} value={value} {...props}>
        <S.Indicator />
      </S.Container>
      <S.Label htmlFor={value}>{label}</S.Label>
    </S.Wrapper>
  );
}
