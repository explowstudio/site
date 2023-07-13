import * as S from "./Dropdown.styles";

export function Dropdown() {
  return (
    <S.Container>
      <S.Content>
        <S.List>
          <li>
            <h1>Design</h1>
            <p>Product Design / Redesign / User Experience</p>
            <p>Design System / User Interface / Wireframes</p>
            <p>Protótipos / Style Guide / UX Research </p>
          </li>
        </S.List>
        <S.List>
          <li>
            <h1>Tecnologia</h1>
            <p>Websites e landing pages / Product development</p>
            <p>Web e mobile apps / E-commerce / Front-end</p>
            <p>Plataformas e sistemas / Back-end / Webflow</p>
          </li>
        </S.List>
        <S.List>
          <li>
            <h1>Business</h1>
            <p>Logos / Papelaria / Identidade visual / Branding</p>
            <p>Copywriting / Social media / Apresentações</p>
            <p>Pitch de vendas / Banners / Proposta comercial</p>
          </li>
        </S.List>
      </S.Content>
    </S.Container>
  );
}
