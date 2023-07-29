import { Lightning } from "@phosphor-icons/react";

import { Grid, Marquee } from "@/ui";
import { theme } from "@/ui/stitches.config";

import * as S from "./OurCulture.styles";

export function OurCulture() {
  return (
    <S.Container>
      <Grid>
        <S.Title>
          Nossos valores compartilhados nos mantêm conectados como uma equipe.
        </S.Title>
        <S.Content>
          <S.CultureList>
            <S.CultureListItem>
              <strong>Nós somos exploradores inquietos</strong>
              <p>
                Nosso espírito nos mantém em busca de novas fronteiras,
                acreditamos que são nas terras desconhecidas que encontramos as
                maiores oportunidades de sucesso.
              </p>
            </S.CultureListItem>
            <S.CultureListItem>
              <strong>Nós apoiamos o aprendizado contínuo</strong>
              <p>
                O conhecimento é uma jornada infinita de descobertas, isso nos
                permite evoluir constantemente e oferecer soluções cada vez mais
                aprimoradas aos nossos clientes.
              </p>
            </S.CultureListItem>
            <S.CultureListItem>
              <strong>Nós temos uma paixão em comum</strong>
              <p>
                Somos unidos pelo desejo de criar soluções digitais que
                transcendam o comum, resultando em experiências que pareçam ter
                vindo de outra galáxia.
              </p>
            </S.CultureListItem>
            <S.CultureListItem>
              <strong>Nós entendemos o valor de ser singular</strong>
              <p>
                Através da singularidade que encontramos oportunidades de
                inovação e deixamos uma marca única no mundo. Ser singular nos
                permite nos destacar e expressar nossa autenticidade.
              </p>
            </S.CultureListItem>
          </S.CultureList>
          <img
            src="/textures/adjectives.svg"
            alt="Quatro círculos, cada um com uma característica de nossa cultura. Paixão, Singularidade, Exploração e Aprendizado"
          />
        </S.Content>
      </Grid>
      <Marquee.Root
        css={{
          height: "120px",
          borderBlock: "1px solid $gray800",
          marginTop: "$44",
        }}
      >
        <Marquee.Content>
          <S.Row>
            <span>Entregas de alto nível</span>
            <Lightning
              size={28}
              weight="fill"
              color={theme.colors.salmon500.value}
            />
            <span>Criativos e únicos</span>
            <Lightning
              size={28}
              weight="fill"
              color={theme.colors.salmon500.value}
            />
            <span>Transparência em todas as etapas</span>
            <Lightning
              size={28}
              weight="fill"
              color={theme.colors.salmon500.value}
            />
            <span>Interfaces profissionais</span>
            <Lightning
              size={28}
              weight="fill"
              color={theme.colors.salmon500.value}
            />
            <span>Processos ágeis e objetivos</span>
            <Lightning
              size={28}
              weight="fill"
              color={theme.colors.salmon500.value}
            />
            <span>Time engajado</span>
            <Lightning
              size={28}
              weight="fill"
              color={theme.colors.salmon500.value}
            />
          </S.Row>
        </Marquee.Content>
      </Marquee.Root>
    </S.Container>
  );
}
