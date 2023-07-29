import { Grid, Tag } from "@/ui";

import * as S from "./OurTeam.styles";

export function OurTeam() {
  return (
    <S.Container>
      <Grid>
        <S.TitleGroup>
          <Tag>Conheça o time</Tag>
          <S.Title>
            Conheça pessoas talentosas que são apaixonadas pelo que fazem
          </S.Title>
          <S.SubTitle>
            Por trás de todo negócio de sucesso, existe um time de sucesso.
          </S.SubTitle>
        </S.TitleGroup>
        <S.TeamList>
          <S.TeamListItem>
            <img src="/team/giovanna.png" alt="Giovanna" />
            <S.FullName>Giovanna Souza</S.FullName>
            <S.Role>Fundadora</S.Role>

            <S.Description>
              Atua junto do cliente desde o primeiro contato até a entrega para
              garantir que a experiência desenvolvendo o projeto seja excelente.
            </S.Description>
          </S.TeamListItem>
          <S.TeamListItem>
            <img src="/team/gabriel.png" alt="Gabriel" />
            <S.FullName>Gabriel Teodoro</S.FullName>
            <S.Role>Co-Fundador</S.Role>

            <S.Description>
              É nosso líder técnico, garante que os projetos sejam desenvolvidos
              com as melhores práticas do mercado.
            </S.Description>
          </S.TeamListItem>
          <S.TeamListItem>
            <img src="/team/kennedy.png" alt="Kennedy" />
            <S.FullName>Kennedy Barros</S.FullName>
            <S.Role>UI/UX Designer | Product Designer</S.Role>

            <S.Description>
              É responsável por garantir que os projetos proporcionem a melhor
              experiência para o usuário final.
            </S.Description>
          </S.TeamListItem>
          <S.TeamListItem>
            <img src="/team/thales.png" alt="Thales" />
            <S.FullName>Thales Menzner</S.FullName>
            <S.Role>Front-End Developer</S.Role>

            <S.Description>
              Atua na construção das interfaces para que elas tenham a melhor
              performance e fidelidade ao layout.
            </S.Description>
          </S.TeamListItem>
          <S.TeamListItem>
            <img src="/team/marcos.png" alt="Marcos" />
            <S.FullName>Marcos Paulo</S.FullName>
            <S.Role>Back-End Developer</S.Role>

            <S.Description>
              Atua nas construções e nas manutenções das infraestruturas dos
              projetos para alcançarmos soluções eficientes.
            </S.Description>
          </S.TeamListItem>
          <S.TeamListItem>
            <img src="/team/pedro.png" alt="Pedro" />
            <S.FullName>Pedro Silva</S.FullName>
            <S.Role>UI/UX Designer | Product Designer </S.Role>

            <S.Description>
              Atua na construção de interfaces prezando por um visual agradável,
              intuitivo e centrado no usuário.
            </S.Description>
          </S.TeamListItem>
        </S.TeamList>
      </Grid>
    </S.Container>
  );
}
