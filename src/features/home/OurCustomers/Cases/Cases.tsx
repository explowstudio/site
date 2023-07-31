import Image from "next/image";

import * as S from "./Cases.styles";
import { MouseEvent, useRef, useState } from "react";

export function Cases() {
  const ref = useRef<HTMLUListElement>(null);

  const [isDragging, setIsDragging] = useState(false);

  const [initialPosition, setInitialPosition] = useState({
    mouseX: 0,
    scrollLeft: 0,
  });

  function handleMouseDown(event: MouseEvent<HTMLUListElement>) {
    if (!ref.current) return;

    setIsDragging(true);
    setInitialPosition({
      mouseX: event.clientX,
      scrollLeft: ref.current.scrollLeft,
    });
  }

  function handleMouseMove(event: MouseEvent<HTMLUListElement>) {
    if (!isDragging || !ref.current) return;

    event.preventDefault();

    const x = event.clientX - initialPosition.mouseX;

    ref.current.scrollLeft = initialPosition.scrollLeft - x;
  }

  return (
    <S.Container
      ref={ref}
      onMouseUp={() => setIsDragging(false)}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsDragging(false)}
    >
      <S.CaseItem>
        <S.CaseItemImage src="/cases/captei.svg" alt="Captei" />
        <S.CaseItemTitle>Sistema Captei</S.CaseItemTitle>
        <S.CaseItemDescription>
          A Captei é uma ferramenta que ajuda imobiliárias e corretores na
          captação de imóveis e na assertividade no contato com seus clientes.
        </S.CaseItemDescription>
        <S.Tags>
          <S.CaseTag>UI Design</S.CaseTag>
          <S.CaseTag>UX Design</S.CaseTag>
          <S.CaseTag>Front-End</S.CaseTag>
          <S.CaseTag>Sistema</S.CaseTag>
        </S.Tags>
      </S.CaseItem>
      <S.CaseItem>
        <S.CaseItemImage
          src="/cases/easygroup.svg"
          alt="EasyGroup"
          width={550}
          height={640}
        />
        <S.CaseItemTitle>EasyGroup</S.CaseItemTitle>
        <S.CaseItemDescription>
          A EasyGroup é um grupo que nasceu com o objetivo de ser um catalisador
          da transformação digital de grandes empresas.
        </S.CaseItemDescription>
        <S.Tags>
          <S.CaseTag>UI Design</S.CaseTag>
          <S.CaseTag>UX Design</S.CaseTag>
          <S.CaseTag>Front-End</S.CaseTag>
          <S.CaseTag>Site</S.CaseTag>
        </S.Tags>
      </S.CaseItem>
      <S.CaseItem>
        <S.CaseItemImage src="/cases/finbits.svg" alt="Finbits - Blog" />
        <S.CaseItemTitle>Finbits - Blog</S.CaseItemTitle>
        <S.CaseItemDescription>
          Curadoria de conteúdos sobre gestão financeira para empresas,
          inteligência de dados e finanças conectadas.
        </S.CaseItemDescription>
        <S.Tags>
          <S.CaseTag>UI Design</S.CaseTag>
          <S.CaseTag>UX Design</S.CaseTag>
          <S.CaseTag>Webflow</S.CaseTag>
          <S.CaseTag>Blog</S.CaseTag>
        </S.Tags>
      </S.CaseItem>
      <S.CaseItem>
        <S.CaseItemImage src="/cases/skina.svg" alt="Skina" />
        <S.CaseItemTitle>Skina</S.CaseItemTitle>
        <S.CaseItemDescription>
          A Skina é um aplicativo de e-commerce onde consumidores vão fazer
          compras em grupo para conseguir descontos em conjunto.
        </S.CaseItemDescription>
        <S.Tags>
          <S.CaseTag>UI Design</S.CaseTag>
          <S.CaseTag>UX Design</S.CaseTag>
          <S.CaseTag>Aplicativo</S.CaseTag>
        </S.Tags>
      </S.CaseItem>
      <S.CaseItem>
        <S.CaseItemImage src="/cases/eztraordinario.svg" alt="Eztraordinário" />
        <S.CaseItemTitle>Eztraordinário</S.CaseItemTitle>
        <S.CaseItemDescription>
          Plataforma de venda de infoprodutos onde produtores hospedam seus
          cursos e vendem o acesso para seus alunos,
        </S.CaseItemDescription>
        <S.Tags>
          <S.CaseTag>UI Design</S.CaseTag>
          <S.CaseTag>UX Design</S.CaseTag>
          <S.CaseTag>Plataforma</S.CaseTag>
        </S.Tags>
      </S.CaseItem>
      <S.CaseItem>
        <S.CaseItemImage src="/cases/site-finbits.svg" alt="Site Finbits" />
        <S.CaseItemTitle>Finbits - Site</S.CaseItemTitle>
        <S.CaseItemDescription>
          Site para apresentar o melhor que o produto da Finbits pode oferecer
          para empresas que querem automatizar sua tesouraria.
        </S.CaseItemDescription>
        <S.Tags>
          <S.CaseTag>UI Design</S.CaseTag>
          <S.CaseTag>UX Design</S.CaseTag>
          <S.CaseTag>Webflow</S.CaseTag>
          <S.CaseTag>Site</S.CaseTag>
        </S.Tags>
      </S.CaseItem>
      <S.CaseItem>
        <S.CaseItemImage src="/cases/sweepy.svg" alt="Sweepy" />
        <S.CaseItemTitle>Sweepy</S.CaseItemTitle>
        <S.CaseItemDescription>
          Aplicativo onde consumidores compram cupons de desconto que são
          escaneados por QR Code nas lojas fisicas.
        </S.CaseItemDescription>
        <S.Tags>
          <S.CaseTag>UI Design</S.CaseTag>
          <S.CaseTag>UX Design</S.CaseTag>
          <S.CaseTag>Aplicativo</S.CaseTag>
        </S.Tags>
      </S.CaseItem>
      <S.CaseItem>
        <S.CaseItemImage
          src="/cases/btg-finbits.svg"
          alt="Finbits - BTG Empresas"
        />
        <S.CaseItemTitle>Finbits - BTG Empresas</S.CaseItemTitle>
        <S.CaseItemDescription>
          Página para apresentar os benefícios para a tesouraria de empresas de
          integrar o banco BTG com a Finbits.
        </S.CaseItemDescription>
        <S.Tags>
          <S.CaseTag>UI Design</S.CaseTag>
          <S.CaseTag>UX Design</S.CaseTag>
          <S.CaseTag>Webflow</S.CaseTag>
          <S.CaseTag>Landing Page</S.CaseTag>
        </S.Tags>
      </S.CaseItem>
      <S.CaseItem>
        <S.CaseItemImage src="/cases/adv.svg" alt="adv.co" />
        <S.CaseItemTitle>adv.co</S.CaseItemTitle>
        <S.CaseItemDescription>
          Sistema de gerenciamento de documentos e assinaturas de um escritório
          de advocacia.
        </S.CaseItemDescription>
        <S.Tags>
          <S.CaseTag>UI Design</S.CaseTag>
          <S.CaseTag>UX Design</S.CaseTag>
          <S.CaseTag>Sistema</S.CaseTag>
        </S.Tags>
      </S.CaseItem>
    </S.Container>
  );
}
