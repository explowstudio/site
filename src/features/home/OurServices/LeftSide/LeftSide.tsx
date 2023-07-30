import { Lightning } from "@phosphor-icons/react";

import { Section } from "@/layouts";

import * as S from "./LeftSide.styles";

export function LeftSide() {
  return (
    <div>
      <Section.SmallTitle variant="secondary">
        Nossos serviços
      </Section.SmallTitle>
      <Section.Title variant="secondary" css={{ maxWidth: "435px" }}>
        Como podemos ajudar a sua empresa
      </Section.Title>

      <S.Row>
        <S.Copyright>Explow studio © 2023</S.Copyright>
        <S.Icon>
          <Lightning size={16} weight="fill" />
        </S.Icon>
      </S.Row>
    </div>
  );
}
