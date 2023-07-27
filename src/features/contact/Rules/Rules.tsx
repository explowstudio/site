import { Asterisk } from "@phosphor-icons/react";

import * as S from "./Rules.styles";

export function Rules() {
  return (
    <S.Container>
      <Asterisk size={28} />
      <S.Title>O que você deve saber antes de nos contratar</S.Title>

      <S.List>
        <S.ListItem>
          <span>1.</span>
          Seguimos um processo de trabalho e é importante que ele seja
          respeitado.
        </S.ListItem>
        <S.ListItem>
          <span>2.</span>
          As entregas precisam ser aprovadas para passarmos para a próxima
          etapa.
        </S.ListItem>
        <S.ListItem>
          <span>3.</span>
          Durante todo o processo estaremos disponíveis para esclarecer dúvidas,
          receber sugestões e trocar ideias.
        </S.ListItem>
        <S.ListItem>
          <span>4.</span>
          Somos parceiros. Estaremos sempre ao seu lado durante a construção do
          seu projeto. Nosso time é seu time.
        </S.ListItem>
      </S.List>
    </S.Container>
  );
}
