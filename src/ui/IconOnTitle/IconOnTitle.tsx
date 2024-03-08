import { ComponentProps } from "react";

import * as S from "./IconOnTitle.styles";

export function IconOnTitle(props: ComponentProps<typeof S.TitleWithIcon>) {
  return (
    <S.TitleWithIcon {...props}>
      <S.AsteriskIcon />
    </S.TitleWithIcon>
  );
}
