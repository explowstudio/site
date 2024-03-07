import { Grid, SocialButtonGroup } from "@/ui";
import { Mouse } from "@/ui/_icons";

import * as S from "./Introduction.styles";

export function Introduction() {
  return (
    <section>
      <S.Container>
        <div>
          <S.Title>Compre ou alugue</S.Title>
          <S.Description>
            Encontre o imóvel ideal para você e sua família
          </S.Description>
          <S.ScrollRoot>
            <Mouse />
            <span>Role e sinta a experiência</span>
          </S.ScrollRoot>
        </div>
        <S.SloganRoot>
          <S.Slogan>
            exclusivos,
            <br />
            digitais &
            <br />
            inovadores
          </S.Slogan>
          <SocialButtonGroup />
        </S.SloganRoot>
      </S.Container>
      <S.Cover src="/cases/compre_ou_alugue/hero.svg" />
    </section>
  );
}
