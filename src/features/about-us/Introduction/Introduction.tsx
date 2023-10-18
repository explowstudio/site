import { Heart } from "@phosphor-icons/react";

import { SocialButtonGroup } from "@/ui";

import * as S from "./Introduction.styles";

export function Introduction() {
  return (
    <S.Container>
      <S.Content>
        <S.UpSide>
          <S.SmallTitle>
            Queremos ser seus parceiros para toda hora 🛸
          </S.SmallTitle>
          <S.TextGroup>
            <S.Title>
              Somos uma equipe de <br /> mentes inquietas e criativas.
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
          <SocialButtonGroup
            direction={{ "@initial": "column", "@1xl": "row" }}
          />

          <S.Video autoPlay width="100%" controls={false} loop muted>
            <source src="/textures/logo+motion.mp4" type="video/mp4" />
          </S.Video>
        </S.BottomSide>
        <S.FromSPToWorld>
          <Heart size={18} />
          De SP para o mundo
        </S.FromSPToWorld>
      </S.Content>
    </S.Container>
  );
}
