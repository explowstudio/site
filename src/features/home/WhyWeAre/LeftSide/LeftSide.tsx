import { ArrowRight } from "@phosphor-icons/react";

import { SocialButtonGroup } from "@/ui";

import * as S from "./LeftSide.styles";

export function LeftSide() {
  return (
    <S.Container>
      <S.SmallTitle>
        <ArrowRight size={20} />
        Quem somos
      </S.SmallTitle>
      <S.Title>Conheça a Explow</S.Title>
      <S.Slogan>exclusivos, digitais & inovadores</S.Slogan>
      <SocialButtonGroup />
    </S.Container>
  );
}
