import { ArrowRight, Lightning } from "@phosphor-icons/react";

import { SmallTitle } from "@/ui";

import * as S from "./LeftSide.styles";

export function LeftSide() {
  return (
    <div>
      <SmallTitle variant="secondary">
        <ArrowRight />
        Nossos serviços
      </SmallTitle>
      <S.Title>Como podemos ajudar a sua empresa</S.Title>

      <S.Row>
        <S.Copyright>Explow studio © 2023</S.Copyright>
        <S.Icon>
          <Lightning size={16} weight="fill" />
        </S.Icon>
      </S.Row>
    </div>
  );
}
