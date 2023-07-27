import { Asterisk, Lightning } from "@phosphor-icons/react";

import { theme } from "@/ui/stitches.config";

import * as S from "./IconOnTitle.styles";

export function IconOnTitle() {
  return (
    <S.TitleWithIcon>
      <S.TitleIcon color="salmon">
        <Lightning size={28} weight="fill" color={theme.colors.black.value} />
      </S.TitleIcon>
      <S.TitleIcon color="purple">
        <Asterisk size={28} />
      </S.TitleIcon>
    </S.TitleWithIcon>
  );
}
