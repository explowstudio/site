import { ArrowRight } from "@phosphor-icons/react";

import { Section } from "@/layouts";
import { Button } from "@/ui";

import { Cases } from "./Cases";
import * as S from "./OurCustomers.styles";

export function OurCustomers() {
  return (
    <S.Container as="section" id="cases">
      <S.Header>
        <S.SectionTitle>
          <Section.SmallTitle>Nossos clientes</Section.SmallTitle>
          <Section.Title>Conheça nossos projetos</Section.Title>
          <Section.Description
            css={{
              "@md": { fontSize: "$md", lineHeight: "$md", maxWidth: "353px" },
            }}
          >
            Designers e desenvolvedores trabalhando lado a lado para entregarem
            projetos com excelência.
          </Section.Description>
        </S.SectionTitle>
        <Button css={{ "@sm": { display: "none" } }}>
          Confira todos os cases
          <ArrowRight />
        </Button>
      </S.Header>
      <Cases />
    </S.Container>
  );
}
