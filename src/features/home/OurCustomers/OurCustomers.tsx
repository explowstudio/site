import { Section } from "@/layouts";

import { Cases } from "./Cases";
import * as S from "./OurCustomers.styles";

export function OurCustomers() {
  return (
    <S.Container as="section" id="cases">
      <S.Header>
        <S.SectionTitle>
          <Section.SmallTitle>Nosso trabalho</Section.SmallTitle>
          <Section.Title>Veja alguns projetos selecionados</Section.Title>
        </S.SectionTitle>
        <Section.Description
          css={{
            "@md": { fontSize: "$md", lineHeight: "$md", maxWidth: "353px" },
          }}
        >
          Time de especialistas digitais trabalhando lado a lado para entregarem
          projetos com excelência. Esse é o nível de entrega Explow.
        </Section.Description>
      </S.Header>
      <Cases />
    </S.Container>
  );
}
