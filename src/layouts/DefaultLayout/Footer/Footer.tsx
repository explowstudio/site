import { Grid, Logo, Link, Divider } from "@/ui";

import * as S from "./Footer.styles";

export function Footer() {
  return (
    <S.Container>
      <Grid>
        <S.UpSide>
          <S.Document>
            <strong>Explow Serviços de Tecnologia LTDA</strong>
            <a>contato@explow.studio</a>
            <small>CNPJ sob o nº 51.163.373/0001-14</small>
          </S.Document>
          <S.Navigation>
            <S.NavigationList>
              <strong>Navegação</strong>
              <Link href="/" color="secondary">
                Quem somos
              </Link>
              <Link href="/" color="secondary">
                Cases
              </Link>
              <Link href="/" color="secondary">
                Expertises
              </Link>
              <Link href="/" color="secondary">
                Contato
              </Link>
            </S.NavigationList>
            <S.NavigationList>
              <strong>Social</strong>
              <Link href="/" color="secondary">
                Behance
              </Link>
              <Link
                color="secondary"
                href="https://www.instagram.com/explow.studio/"
                target="_blank"
              >
                Instagram
              </Link>
              <Link
                color="secondary"
                href="https://www.linkedin.com/company/explow-studio/"
                target="_blank"
              >
                LinkedIn
              </Link>
              <Link
                color="secondary"
                href="https://www.instagram.com/explow.studio/"
                target="_blank"
              >
                Medium
              </Link>
            </S.NavigationList>
          </S.Navigation>
        </S.UpSide>
        <Divider css={{ marginBlock: "$12 $8" }} />
        <S.DownSide>
          <Logo />
          <small>
            © 2023 by <b>Explow</b>. Todos os direitos reservados. Made in São
            Paulo.
          </small>
          <Link href="/">Voltar ao topo</Link>
        </S.DownSide>
      </Grid>
    </S.Container>
  );
}
