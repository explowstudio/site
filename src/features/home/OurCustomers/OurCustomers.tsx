import { ArrowRight } from "@phosphor-icons/react";

import { Section } from "@/layouts";
import { Button } from "@/ui";

import * as S from "./OurCustomers.styles";

export function OurCustomers() {
  return (
    <S.Container>
      <S.Header>
        <S.SectionTitle>
          <Section.SmallTitle>Nossos clientes</Section.SmallTitle>
          <Section.Title>Conheça nossos projetos</Section.Title>
          <Section.Description>
            Designers e desenvolvedores trabalhando lado a lado para entregarem
            projetos com excelência.
          </Section.Description>
        </S.SectionTitle>
        <Button>
          Confira todos os cases
          <ArrowRight />
        </Button>
      </S.Header>
    </S.Container>
  );
}
