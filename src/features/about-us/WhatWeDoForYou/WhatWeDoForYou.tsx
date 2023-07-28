import { useState } from "react";

import * as S from "./WhatWeDoForYou.styles";

const services = [
  [
    "Product Design / Redesign / User Experience ",
    "Design System / User Interface / Wireframes",
    "Protótipos / Style Guide / UX Research",
  ],
  [
    "Websites e landing pages / product development",
    "Web e mobile apps / e-commerce / front-end",
    "Plataformas e Sistemas / Back-end / No-code",
  ],
  [
    "Logos / papelaria / identidade visual / branding",
    "Copywriting / Social Media / Apresentações",
    "Pitch de Vendas / Banners / Proposta Comercial",
  ],
];

export function WhatWeDoForYou() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <S.Container>
      <S.Row>
        <S.Title>Veja o que podemos fazer por você</S.Title>
        <S.LargeTitle
          position="right"
          selected={activeIndex === 0}
          onMouseEnter={() => setActiveIndex(0)}
        >
          DESIGN
        </S.LargeTitle>
      </S.Row>
      <S.Row>
        <S.LargeTitle
          position="left"
          selected={activeIndex === 1}
          onMouseEnter={() => setActiveIndex(1)}
        >
          CODE
        </S.LargeTitle>
        <S.Content>
          {services[activeIndex].map((service) => (
            <span key={service}>{service}</span>
          ))}
        </S.Content>
      </S.Row>
      <S.Row>
        <div />
        <S.LargeTitle
          position="right"
          selected={activeIndex === 2}
          onMouseEnter={() => setActiveIndex(2)}
        >
          BUSINESS
        </S.LargeTitle>
      </S.Row>
    </S.Container>
  );
}
