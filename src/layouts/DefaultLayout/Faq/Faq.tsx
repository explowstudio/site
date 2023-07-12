import { Accordion, Divider } from "@/ui";

import * as S from "./Faq.styles";
import { Fragment } from "react";
import { Section } from "../Section";

const FAQ = [
  {
    title: "Como funciona os processos da Explow?",
    children: (
      <>
        <S.Description>
          Analisamos os requisitos do projeto, cronograma, necessidades e escopo
          geral. Em seguida, confirmamos essas informações para poder encaminhar
          um orçamento detalhado.
        </S.Description>
        <S.Description>
          Após a aprovação do orçamento, nossa equipe prepara um contrato com
          todos os detalhes do trabalho e envia por e-mail para assinatura,
          juntamente com um depósito (normalmente entre 25% e 50%). Durante
          todas as etapas você será acompanhado pela Giovanna que te atualizará
          dos avanços, tirará dúvidas e garantirá que sua experiência
          desenvolvendo um projeto conosco seja excelente.
        </S.Description>
        <S.Description>
          À medida que chegamos perto do fim nos orgulhamos de lançar mais um
          projeto bem-sucedido e permanecemos ao lado dos nossos clientes para
          apoiá-los na expansão de seus negócios.
        </S.Description>
      </>
    ),
  },
  {
    title: "Vocês fornecem apenas Design ou desenvolvimento também?",
    children: (
      <S.Description>
        Normalmente, aconselhamos a construção do design e desenvolvimento a
        partir de uma única fonte. Nos últimos anos, aperfeiçoamos a maneira
        como nossos designers e desenvolvedores trabalham juntos para fornecer a
        saída mais eficiente. Embora gostemos de estar envolvidos em todas as
        etapas ao longo do caminho, também fornecemos trabalho apenas de
        design/desenvolvimento para determinados projetos.
      </S.Description>
    ),
  },
  {
    title: "Qual é a duração de um projeto e quanto custará?",
    children: (
      <S.Description>
        Como cada projeto é único, não podemos fornecer uma resposta geral a
        essa pergunta. O preço e a duração do projeto depende da complexidade e
        do escopo do projeto, recomendamos que preencha nosso formulário de
        briefing para mapearmos suas necessidades e obter uma resposta mais
        exata.
      </S.Description>
    ),
  },
  {
    title: "Quais as tecnologias de programação que vocês usam?",
    children: (
      <S.Description>
        Nossa equipe é altamente qualificada e possui conhecimento especializado
        em uma variedade de tecnologias de programação. Utilizamos HTML, CSS,
        JavaScript, ReactJS, NextJS, React Native, TypeScript e NodeJS para
        criar websites e aplicações de alta qualidade. Essas tecnologias nos
        permitem desenvolver interfaces de usuário modernas, responsivas e
        visualmente atraentes, garantindo uma experiência excepcional para os
        usuários.
      </S.Description>
    ),
  },
  {
    title:
      "Por que é importante ter uma presença na web e um design atraente e funcional?",
    children: (
      <S.Description>
        A maioria das pessoas hoje em dia busca produtos e serviços na internet,
        se sua empresa não estiver presente ou com um visual ultrapassado, você
        pode estar perdendo oportunidades de negócios para seus concorrentes.
        Uma presença na web e um bom design são importantes para atrair e
        envolver os usuários, transmitir credibilidade e alcançar um público
        maior.
      </S.Description>
    ),
  },
];

export function Faq() {
  return (
    <>
      <Section.Title css={{ marginBottom: "$16" }}>
        Perguntas frequentes
      </Section.Title>
      <Accordion.Root collapsible type="single">
        {FAQ.map(({ title, children }) => (
          <Fragment key={title}>
            <Accordion.Item value={title}>
              <Accordion.Trigger>
                <S.Title>{title}</S.Title>
                <Accordion.MinusCircleIcon size={24} aria-hidden />
                <Accordion.PlusCircleIcon size={24} aria-hidden />
              </Accordion.Trigger>
              <Accordion.Content>
                <S.Column>{children}</S.Column>
              </Accordion.Content>
            </Accordion.Item>
            {title !== FAQ.at(-1)?.title && (
              <Divider
                css={{
                  marginBlock: "$8",
                  opacity: 0.7,
                }}
              />
            )}
          </Fragment>
        ))}
      </Accordion.Root>
    </>
  );
}
