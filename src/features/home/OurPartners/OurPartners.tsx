import { ArrowRight } from "@phosphor-icons/react";

import { Logo, SmallTitle } from "@/ui";

import * as S from "./OurPartners.styles";
import Image from "next/image";

export function OurPartners() {
  return (
    <S.Container as="section">
      <SmallTitle>
        <ArrowRight />
        Nossos clientes
      </SmallTitle>
      <S.Title>Conheça alguns parceiros que cresceram com a Explow</S.Title>
      <S.Description>
        Queremos ser parceiros de empresas que entendem que um desenvolvimento
        bem estruturado pode fazer a diferença. E estamos aqui para isso.
      </S.Description>
      <S.Partners>
        <S.Partner>
          <Image
            src="/partners/skina.svg"
            alt="Skina"
            width={101}
            height={33}
          />
          <S.PartnerDescription css={{ maxWidth: "282px" }}>
            Criamos um aplicativo completo de e-commerce com foco em vendas e
            descontos para compras em grupos.
          </S.PartnerDescription>
        </S.Partner>
        <S.Partner>
          <Image
            src="/partners/finbits.svg"
            alt="Finbits"
            width={138}
            height={33}
          />
          <S.PartnerDescription>
            Junto do time da Finbits, ajudamos a desenvolver o novo site
            apresentando a plataforma e melhorando a autoridade da empresa no
            mercado.
          </S.PartnerDescription>
        </S.Partner>
        <S.Partner>
          <Image
            src="/partners/advco.svg"
            alt="adv.co"
            width={102}
            height={33}
          />
          <S.PartnerDescription>
            Fomos parceiros na criação de um sistema de gerenciamento backoffice
            de um escritório de advocacia para automatizar processos internos.
          </S.PartnerDescription>
        </S.Partner>
        <S.Partner>
          <Image
            src="/partners/captei.svg"
            alt="Captei"
            width={168}
            height={33}
          />
          <S.PartnerDescription>
            Ajudamos no redesign de todo o sistema imobiliário da empresa
            mapeando melhorias de usabilidade e passando mais profissionalismo.
          </S.PartnerDescription>
        </S.Partner>
        <S.Partner>
          <Image
            src="/partners/easygroup.svg"
            alt="EasyGroup"
            width={167}
            height={33}
          />
          <S.PartnerDescription>
            Tivemos o prazer de participar da criação de 4 landing pages
            abordando os serviços prestados por cada uma das empresas do grupo
            Easy.
          </S.PartnerDescription>
        </S.Partner>
        <S.Partner>
          <Image
            src="/partners/eztraordinario.svg"
            alt="Eztraordinário"
            width={207}
            height={33}
          />
          <S.PartnerDescription>
            Colaboramos no redesign de uma plataforma de ensino a distancia
            visando melhorar tanto a área do aluno quanto a do instrutor.
          </S.PartnerDescription>
        </S.Partner>
      </S.Partners>
    </S.Container>
  );
}
