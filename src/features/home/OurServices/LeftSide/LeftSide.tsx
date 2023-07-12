import { ArrowRight, Lightning } from "@phosphor-icons/react";

import * as S from "./LeftSide.styles";

export function LeftSide() {
  return (
    <div>
      <S.SmallTitle>
        <ArrowRight />
        Nossos serviços
      </S.SmallTitle>
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
