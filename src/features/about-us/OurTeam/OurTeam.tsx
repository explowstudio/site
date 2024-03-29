import Link from "next/link";

import { Grid, Tag } from "@/ui";
import { LinkedinLogo } from "@phosphor-icons/react";

import * as S from "./OurTeam.styles";

export function OurTeam() {
  return (
    <S.Container>
      <Grid>
        <S.TitleGroup>
          <Tag>Conheça os founders</Tag>
          <S.Title>
            Pessoas que são apaixonados pelo que fazem e os resultados entregues
          </S.Title>
        </S.TitleGroup>
        <S.TeamList>
          <S.TeamListItem>
            <img src="/team/giovanna.png" alt="Giovanna" />
            <div>
              <S.FounderInfo>
                <S.FullName>Giovanna Souza</S.FullName>
                <S.Role>Fundadora & CEO</S.Role>
              </S.FounderInfo>

              <S.Description>
                É responsável pelos relacionamentos, satisfação dos clientes e
                gerenciamento de projetos garantindo que toda a experiência seja
                excelente.
                <br />
                <br />
                Durante sua carreira transacionou entre programação e design em
                diversos projetos até encontrar um gap: a frustração dos
                contratantes com a falta de qualidade, que resultava em dores de
                cabeça com o desenvolvimento.
                <br />
                <br />
                Tendo a missão de contrariar o baixo nível de qualidade em
                desenvolvimento através da Explow, começou a criar conteúdo no
                Linkedin documentando sua caminhada e aprendizados conquistando
                diversos seguidores.
              </S.Description>
            </div>
          </S.TeamListItem>
          <S.TeamListItem css={{ "@md": { flexDirection: "column-reverse" } }}>
            <div>
              <S.FounderInfo>
                <S.FullName>Gabriel Teodoro</S.FullName>
                <S.Role>Co-fundador & Software Engineer Sênior</S.Role>
              </S.FounderInfo>

              <S.Description>
                É responsável pela liderança em todas as decisões técnicas
                cruciais, garantindo o direcionamento estratégico e a excelência
                técnica da equipe.
                <br />
                <br />
                Sua trajetória no desenvolvimento teve início cedo aos 12 anos,
                quando mergulhou na programação por conta própria. Ao longo dos
                últimos 8 anos, acumulou uma rica bagagem de experiência que o
                capacitou a desempenhar o papel de líder técnico.
                <br />
                <br />
                Sua contribuição impulsionou o aumento no faturamento de
                diversas empresas, graças à implementação de soluções inovadoras
                e altamente eficazes.
              </S.Description>
            </div>
            <img src="/team/gabriel.png" alt="Gabriel" />
          </S.TeamListItem>
        </S.TeamList>
      </Grid>
    </S.Container>
  );
}
