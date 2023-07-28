import { ComponentProps } from "react";
import { ArrowRight } from "@phosphor-icons/react";

import { Grid, Divider, Link } from "@/ui";

import * as S from "./Dropdown.styles";

export function Dropdown({ color, ...rest }: ComponentProps<typeof S.Paper>) {
  return (
    <S.Wrapper>
      <S.Paper color={color} {...rest}>
        <S.Content>
          <S.Column>
            <S.Title>Design</S.Title>
            <S.Text color={color}>
              Product Design / Redesign / User Experience
            </S.Text>
            <S.Text color={color}>
              Design System / User Interface / Wireframes
            </S.Text>
            <S.Text color={color}>
              Protótipos / Style Guide / UX Research{" "}
            </S.Text>
          </S.Column>
          <S.Column>
            <S.Title>Development</S.Title>
            <S.Text color={color}>
              Websites e landing pages / Product development
            </S.Text>
            <S.Text color={color}>
              Web e mobile apps / E-commerce / Front-end
            </S.Text>
            <S.Text color={color}>
              Plataformas e sistemas / Back-end / Webflow
            </S.Text>
          </S.Column>
          <S.Column>
            <S.Title>Business</S.Title>
            <S.Text color={color}>
              Logos / Papelaria / Identidade visual / Branding
            </S.Text>
            <S.Text color={color}>
              Copywriting / Social media / Apresentações
            </S.Text>
            <S.Text color={color}>
              Pitch de vendas / Banners / Proposta comercial
            </S.Text>
          </S.Column>
        </S.Content>
        <Grid>
          <Divider css={{ marginBlock: "$24 $7" }} color={color} />
          <S.Row>
            <Link href="/contact" color={color}>
              Iniciar um projeto com a Explow
              <ArrowRight size={16} />
            </Link>

            <S.SocialMedia>
              <Link
                href="https://www.linkedin.com/company/explow-studio"
                target="_blank"
                color={color}
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.instagram.com/explow.studio/"
                target="_blank"
                color={color}
              >
                Instagram
              </Link>
              <Link
                href="https://medium.com/@explowstudio"
                target="_blank"
                color={color}
              >
                Medium
              </Link>
            </S.SocialMedia>
          </S.Row>
        </Grid>
      </S.Paper>
    </S.Wrapper>
  );
}
