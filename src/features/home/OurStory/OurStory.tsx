import { ArrowRight } from "@phosphor-icons/react";

import { Divider, SmallTitle } from "@/ui";
import { ContactButton } from "@/features/contact";
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
        A Explow <span>transforma</span> empresas por meio de produtos digitais
        impactantes. Nossas interfaces elevam a <span>experiência</span> do
        usuário, gerando valor em todas as fases da jornada do cliente. Com
        pesquisa, foco no usuário e desenvolvimento estruturado, garantimos{" "}
        <span>resultados</span> significativos.
      </S.Content>
      <ProgressiveExpansion.WhileInView delay={0.8}>
        <Divider css={{ marginBlock: "$16", "@md": { marginBlock: "$8" } }} />
      </ProgressiveExpansion.WhileInView>
      <S.CallToAction>
        <FadeIn.WhileInView initial={{ x: -20 }} animate={{ x: 0 }} delay={1.4}>
          <ContactButton />
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
