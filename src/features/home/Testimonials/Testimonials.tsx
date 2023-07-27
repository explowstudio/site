import { useState } from "react";

import { Quote } from "@/ui/_icons/Quote";
import { theme } from "@/ui/stitches.config";

import * as S from "./Testimonials.styles";

const testimonials = [
  {
    content:
      "“Do atendimento personalizado até o desenvolvimento do projeto só tenho elogios a fazer pelo excelente trabalho que me prestaram, o projeto ficou melhor do que eu imaginei que seria, superou minhas expectativas.”",
    person: {
      title: "Renan Mittelstaedt",
      description: "Founder at EasyGroup",
    },
  },
  {
    content:
      "”Incrível em todos os sentidos com suas entregas com qualidade, e assertividade. Recomento para todas as pessoas que me perguntam sobre a mesma.”",
    person: {
      title: "Gabriella Araújo",
      description: "Co-founder at Be Tech",
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
      '"Além de mim, todo o pessoal da Captei também adorou o resultado das entregas da Explow, captaram bem a ideia que queríamos passar para os usuários dos nosso produtos."',
    person: {
      title: "Leonardo Fabra",
      description: "Co-founder & CEO at Captei",
    },
  },
];

export function Testimonials() {
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState(0);

  const testimonial = testimonials[selectedTestimonialIndex];

  return (
    <S.Container as="section">
      <Quote size={55} color={theme.colors.gray100.value} />
      <S.Content>{testimonial.content}</S.Content>
      <S.Person>
        <S.PersonTitle>{testimonial.person.title}</S.PersonTitle>
        <S.PersonDescription>
          {testimonial.person.description}
        </S.PersonDescription>
      </S.Person>
      <S.DotsHorizontal>
        {testimonials.map((testimonial, index) => (
          <S.DotButton
            key={testimonial.content}
            active={index === selectedTestimonialIndex}
            title={`Testemunho de ${testimonial.person.title}`}
            onClick={() => setSelectedTestimonialIndex(index)}
          />
        ))}
      </S.DotsHorizontal>
    </S.Container>
  );
}
