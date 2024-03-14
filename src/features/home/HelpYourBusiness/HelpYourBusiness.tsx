import { Section } from "@/layouts";
import { Grid } from "@/ui";

import * as S from "./HelpYourBusiness.styles";

export function HelpYourBusiness() {
  return (
    <S.Container as="section">
      <S.TitleRoot>
        <div>
          <S.Title>Como podemos ajudar o seu negócio</S.Title>
          <S.Subtitle>
            Soluções completas para impulsionar sua empresa
          </S.Subtitle>
        </div>
        <S.Slogan>exclusivos, digitais & inovadores</S.Slogan>
      </S.TitleRoot>
      <S.Content>
        <S.Column>
          <strong>Design</strong>
          <span>Sites e landing pages</span>
          <span>Aplicativos</span>
          <span>Sistemas e plataformas</span>
          <span>Lojas virtuais</span>
          <span>Design System</span>
        </S.Column>
        <S.Column>
          <strong>Tecnologia</strong>
          <span>Programação Front-end</span>
          <span>Programação Back-end</span>
          <span>Programação de aplicativos</span>
          <span>Webflow</span>
          <span>Animações</span>
        </S.Column>
        <S.Column>
          <strong>Estratégia</strong>
          <span>Tráfego pago</span>
          <span>Copywriting</span>
          <span>Treinamento comercial</span>
          <span>Posicionamento</span>
          <span>Proposta comercial</span>
        </S.Column>
        <S.Column>
          <strong>Branding</strong>
          <span>Naming</span>
          <span>Identidade visual</span>
          <span>Social Media</span>
          <span>Logo</span>
          <span>Linha editorial</span>
        </S.Column>
      </S.Content>
    </S.Container>
  );
}
