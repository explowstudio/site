import { ComponentProps } from "react";

import * as S from "./IconOnTitle.styles";

export function IconOnTitle(props: ComponentProps<typeof S.TitleWithIcon>) {
  return (
    <S.TitleWithIcon {...props}>
      <S.TitleIcon color="salmon">
        <S.LightningIcon weight="fill" />
      </S.TitleIcon>
      <S.TitleIcon color="purple">
        <S.AsteriskIcon />
      </S.TitleIcon>
    </S.TitleWithIcon>
  );
}
