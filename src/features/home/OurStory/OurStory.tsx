import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

import { Button, Divider, SmallTitle } from "@/ui";
import { FadeIn, ProgressiveExpansion } from "@/ui/_transitions";

import * as S from "./OurStory.styles";

export function OurStory() {
  return (
    <S.Container as="section">
      <SmallTitle
        as={FadeIn.WhileInView}
        component="small"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
      >
        <ArrowRight />
        Sobre nós
      </SmallTitle>
      <S.Content
        component="p"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        delay={0.4}
        duration={1.2}
      >
        A Explow revoluciona empresas com produtos <span>digitais</span>{" "}
        poderosos. Nossas interfaces inovadoras aprimoram a experiência dos{" "}
        <span>usuários</span>, agregando valor em todas as etapas da jornada do
        cliente. Pesquisa, foco no usuário e desenvolvimento criativo garantem{" "}
        <span>resultados</span> impactantes.
      </S.Content>
      <ProgressiveExpansion.WhileInView delay={0.8}>
        <Divider css={{ marginBlock: "$16", "@md": { marginBlock: "$8" } }} />
      </ProgressiveExpansion.WhileInView>
      <S.CallToAction>
        <FadeIn.WhileInView initial={{ x: -20 }} animate={{ x: 0 }} delay={1.4}>
          <Button as={Link} href="/contact">
            Conheça a Explow
            <ArrowRight />
          </Button>
        </FadeIn.WhileInView>
        <FadeIn.WhileInView
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          delay={1.4}
          component="small"
        >
          Somos um estúdio de mentes criativas e inquietas especializado em
          desenvolver <b>experiências digitais singulares</b> através do design
          e tecnologia.
        </FadeIn.WhileInView>
      </S.CallToAction>
    </S.Container>
  );
}
