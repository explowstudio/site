import { ArrowRight } from "@phosphor-icons/react";
import NextLink from "next/link";

import { Grid, Logo, Link, Divider, Button } from "@/ui";

import * as S from "./Footer.styles";
import { LetsWorkIcon } from "./LetsWorkIcon";
import { ArrowForward } from "@/ui/_icons";

export function Footer() {
  function handleBackToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <S.Wrapper>
      <S.TitleRoot>
        <h1>Vamos fazer sua empresa decolar no digital juntos</h1>
        <Button variant="secondary" as={NextLink} href="/contact">
          Iniciar projeto
          <ArrowRight />
        </Button>
      </S.TitleRoot>
      <S.Box>
        <LetsWorkIcon />
        <Grid
          css={{
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",

            "@md": {
              flexDirection: "column",
              alignItems: "center",
              gap: "$14",
            },
          }}
        >
          <S.Document>
            <strong>Explow Serviços de Tecnologia LTDA</strong>
            <a>contato@explow.studio</a>
            <small>CNPJ sob o nº 51.163.373/0001-14</small>
            <small className="copyright">
              © 2024 by <strong>Explow</strong>. Todos os direitos reservados
            </small>
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
              <Link href="/expertise" color="tertiary">
                Expertises
              </Link>
              <Link href="/contact" color="tertiary">
                Contato
              </Link>
            </S.NavigationList>
            <S.NavigationList>
              <strong>Social</strong>
              <Link href="/" color="tertiary">
                Behance
                <ArrowForward />
              </Link>
              <Link
                color="tertiary"
                href="https://www.instagram.com/explow.studio/"
                target="_blank"
              >
                Instagram
                <ArrowForward />
              </Link>
              <Link
                color="tertiary"
                href="https://www.linkedin.com/company/explow-studio/"
                target="_blank"
              >
                LinkedIn
                <ArrowForward />
              </Link>
              <Link
                color="tertiary"
                href="https://medium.com/@explowstudio"
                target="_blank"
              >
                Medium
                <ArrowForward />
              </Link>
            </S.NavigationList>
          </S.Navigation>
        </Grid>
        <S.LogoOversized src="/textures/logo-oversized.svg" alt="" />
      </S.Box>
    </S.Wrapper>
  );
}
