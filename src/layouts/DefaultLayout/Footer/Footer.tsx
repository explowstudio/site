import { ArrowRight } from "@phosphor-icons/react";
import NextLink from "next/link";

import { Grid, Logo, Link, Divider, Button } from "@/ui";

import * as S from "./Footer.styles";

export function Footer() {
  return (
    <S.Wrapper>
      <S.Box>
        <h1>Vamos fazer sua marca decolar no digital</h1>
        <Button variant="secondary" as={NextLink} href="/contact">
          Iniciar projeto
          <ArrowRight />
        </Button>
      </S.Box>
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
                <Link href="/about-us" color="tertiary">
                  Quem somos
                </Link>
                <Link href="/#cases" color="tertiary">
                  Cases
                </Link>
                <Link href="/" color="tertiary">
                  Expertises
                </Link>
                <Link href="/" color="tertiary">
                  Contato
                </Link>
              </S.NavigationList>
              <S.NavigationList>
                <strong>Social</strong>
                <Link href="/" color="tertiary">
                  Behance
                </Link>
                <Link
                  color="tertiary"
                  href="https://www.instagram.com/explow.studio/"
                  target="_blank"
                >
                  Instagram
                </Link>
                <Link
                  color="tertiary"
                  href="https://www.linkedin.com/company/explow-studio/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
                <Link
                  color="tertiary"
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
    </S.Wrapper>
  );
}
