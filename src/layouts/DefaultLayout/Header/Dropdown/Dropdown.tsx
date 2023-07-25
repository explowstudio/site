import { ArrowRight } from "@phosphor-icons/react";

import { Grid, Divider, Link } from "@/ui";

import * as S from "./Dropdown.styles";

export function Dropdown() {
  return (
    <S.Wrapper>
      <S.Paper>
        <S.Content>
          <S.Column>
            <S.Title>Design</S.Title>
            <S.Text>Product Design / Redesign / User Experience</S.Text>
            <S.Text>Design System / User Interface / Wireframes</S.Text>
            <S.Text>Protótipos / Style Guide / UX Research </S.Text>
          </S.Column>
          <S.Column>
            <S.Title>Development</S.Title>
            <S.Text>Websites e landing pages / Product development</S.Text>
            <S.Text>Web e mobile apps / E-commerce / Front-end</S.Text>
            <S.Text>Plataformas e sistemas / Back-end / Webflow</S.Text>
          </S.Column>
          <S.Column>
            <S.Title>Business</S.Title>
            <S.Text>Logos / Papelaria / Identidade visual / Branding</S.Text>
            <S.Text>Copywriting / Social media / Apresentações</S.Text>
            <S.Text>Pitch de vendas / Banners / Proposta comercial</S.Text>
          </S.Column>
        </S.Content>
        <Grid>
          <Divider css={{ marginBlock: "$24 $7" }} />
          <S.Row>
            <Link href="/contact">
              Iniciar um projeto com a Explow
              <ArrowRight size={16} />
            </Link>

            <S.SocialMedia>
              <Link
                href="https://www.linkedin.com/company/explow-studio"
                target="_blank"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.instagram.com/explow.studio/"
                target="_blank"
              >
                Instagram
              </Link>
              <Link href="https://medium.com/@explowstudio" target="_blank">
                Medium
              </Link>
            </S.SocialMedia>
          </S.Row>
        </Grid>
      </S.Paper>
    </S.Wrapper>
  );
}
