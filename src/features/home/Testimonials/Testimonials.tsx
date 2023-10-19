import { useState } from "react";

import {
  dotButtonVariants,
  dotsHorizontalVariants,
} from "./Testimonials.animations";
import * as S from "./Testimonials.styles";

const testimonials = [
  {
    content:
      '"Além de mim, todo o pessoal da Captei também adorou o resultado das entregas da Explow, captaram bem a ideia que queríamos passar para os usuários dos nosso produtos."',
    person: {
      title: "Leonardo Fabra",
      description: "Co-founder & CEO at Captei",
    },
  },
  {
    content:
      '"Tínhamos um prazo curto para lançar o novo site da Labmine e recebemos uma entrega muito além do esperado e antes do prazo. Estamos extremamente satisfeitos pela entrega, pelo atendimento e pela parceria com a Explow."',
    person: {
      title: "Daniel Tavares",
      description: "CEO at Labmine",
    },
  },
  {
    content:
      '"Tem sido ótimo trabalhar com a Explow, ficamos muito felizes em fechar mais projetos com os mesmos."',
    person: {
      title: "Marcela Falco",
      description: "Head of Marketing at Finbits",
    },
  },
  {
    content:
      "“Sabemos que com o tempo o projeto acaba ficando cansativo e vai perdendo a euforia do início. Com a Explow nem consegui perceber, tudo fluiu muito bem, conseguiram extrair todas as informações, requisitos necessários e essência para o desenvolver o projeto com excelência.”",
    person: {
      title: "Willian Pinho",
      description: "Founder at Willian Pinho Consultoria",
    },
  },
];

export function Testimonials() {
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState(0);

  const testimonial = testimonials[selectedTestimonialIndex];

  return (
    <S.Container as="section">
      <S.Content viewport={{ amount: "all" }}>
        <S.QuoteIcon />
        <S.Description>{testimonial.content}</S.Description>
        <S.Person>
          <S.PersonTitle>{testimonial.person.title}</S.PersonTitle>
          <S.PersonDescription>
            {testimonial.person.description}
          </S.PersonDescription>
        </S.Person>
      </S.Content>
      <S.DotsHorizontal
        initial="hidden"
        whileInView="show"
        variants={dotsHorizontalVariants}
        viewport={{ once: true }}
      >
        {testimonials.map((testimonial, index) => (
          <S.DotButton
            key={testimonial.content}
            active={index === selectedTestimonialIndex}
            title={`Testemunho de ${testimonial.person.title}`}
            onClick={() => setSelectedTestimonialIndex(index)}
            variants={dotButtonVariants}
          />
        ))}
      </S.DotsHorizontal>
    </S.Container>
  );
}
