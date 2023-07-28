import { Grid, SocialButtonGroup } from "@/ui";

import * as S from "./Introduction.styles";
import { Heart } from "@phosphor-icons/react";

export function Introduction() {
  return (
    <S.Container>
      <S.Content>
        <S.UpSide>
          <S.SmallTitle>Queremos ser seus parceiros 🛸</S.SmallTitle>
          <S.TextGroup>
            <S.Title>
              Somos uma equipe enxuta,
              <br />
              de mentes inquietas e criativas.
            </S.Title>
            <S.DescriptionGroup>
              <S.Description>
                Desde o início, estabelecemos como lema a palavra
                <b>&quot;explorar&quot;</b>. Acreditamos que a exploração é a
                chave para a descoberta de novos horizontes e o desbloqueio de
                ideias criativas.
              </S.Description>
              <S.Description>
                Nosso <b>espírito</b> curioso e aventureiro nos impulsiona a
                buscar constantemente por <b>abordagens inovadoras</b> e
                soluções originais para cada projeto que assumimos.
              </S.Description>
            </S.DescriptionGroup>
          </S.TextGroup>
        </S.UpSide>
        <S.BottomSide>
          <SocialButtonGroup direction="column" />

          <img src="/textures/explow.svg" alt="Explow" />
        </S.BottomSide>
        <S.FromSPToWorld>
          <Heart size={18} />
          De SP para o mundo
        </S.FromSPToWorld>
      </S.Content>
    </S.Container>
  );
}
