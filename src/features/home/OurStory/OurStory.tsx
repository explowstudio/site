import { Button, Divider, Grid, SmallTitle } from "@/ui";
import { ArrowRight } from "@phosphor-icons/react";

import * as S from "./OurStory.styles";

export function OurStory() {
  return (
    <S.Container as="section">
      <SmallTitle>
        <ArrowRight />
        Sobre nós
      </SmallTitle>
      <S.Content>
        A Explow revoluciona empresas com produtos <span>digitais</span>{" "}
        poderosos. Nossas interfaces inovadoras aprimoram a experiência dos{" "}
        <span>usuários</span>, agregando valor em todas as etapas da jornada do
        cliente. Pesquisa, foco no usuário e desenvolvimento criativo garantem{" "}
        <span>resultados</span> impactantes.
      </S.Content>
      <Divider css={{ marginBlock: "$16" }} />
      <S.CallToAction>
        <Button>
          Conheça a Explow
          <ArrowRight />
        </Button>
        <small>
          Somos um estúdio de mentes criativas e inquietas especializado em
          desenvolver <b>experiências digitais singulares</b> através do design
          e tecnologia.
        </small>
      </S.CallToAction>
    </S.Container>
  );
}
