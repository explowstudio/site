import { useState } from "react";

import * as S from "./Testimonials.styles";
import { Grid } from "@/ui";

const testimonials = [
  {
    content:
      "”Normalmente, o desenvolvimento de websites pode ser uma experiência traumática, no entanto, a equipe da Explow lidou excepcionalmente bem com todas as nossas demandas e entregou os nossos websites de acordo com as nossas expectativas.”",
    person: {
      avatar: "/testimonials/eduardo_gama.svg",
      title: "Eduardo Gama",
      description: "Co-fundador e CEO da @Minery",
    },
  },
  {
    content:
      '"Foi fundamental no sucesso das mudanças no aplicativo da Setfin, transformando complexidade em intuitividade e elevando o engajamento dos nossos usuários. Seu compromisso com a excelência superou expectativas. Essa parceria com a Setfin ainda tem uma estrada muito longa."',
    person: {
      avatar: "/testimonials/luan_marcondes.svg",
      title: "Luan Marcondes",
      description: "Fundador e CEO da @Setfin",
    },
  },
  {
    content:
      '"Tínhamos um prazo curto para lançar o novo site da Labmine e recebemos uma entrega muito além do esperado e antes do prazo. Estamos extremamente satisfeitos pela entrega, pelo atendimento e pela parceria com a Explow."',
    person: {
      avatar: "/testimonials/daniel_tavares.svg",
      title: "Daniel Tavares",
      description: "CEO da @Labmine",
    },
  },
  {
    content:
      "“Do atendimento personalizado até o desenvolvimento do projeto só tenho elogios a fazer pelo excelente trabalho que me prestaram, o projeto ficou melhor do que eu imaginei que seria, superou minhas expectativas.”",
    person: {
      avatar: "/testimonials/renan_mittelstaedt.svg",
      title: "Renan Mittelstaedt",
      description: "Fundador da @EasyGroup",
    },
  },
  {
    content:
      '"Além de mim, todo o pessoal da Captei também adorou o resultado das entregas da Explow, captaram bem a ideia que queríamos passar para os usuários dos nosso produtos."',
    person: {
      avatar: "/testimonials/leonardo_fabra.svg",
      title: "Leonardo Fabra",
      description: "Co-fundador e CEO da @Captei",
    },
  },
  {
    content:
      '"Tem sido ótimo trabalhar com a Explow, ficamos muito felizes em fechar mais projetos com os mesmos."',
    person: {
      avatar: "/testimonials/marcela_falco.svg",
      title: "Marcela Falco",
      description: "Head de Marketing da @Finbits",
    },
  },
];

function ThunderCircle() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13" cy="13" r="13" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8736 12.7067L13.5799 18.7051C13.1863 19.2543 12.2955 18.9856 12.2955 18.3169V14.3633H8.70617C8.13758 14.3633 7.80257 13.7457 8.12687 13.2933L12.4206 7.29486C12.8141 6.74566 13.7049 7.01439 13.7049 7.6831V11.6367H17.2943C17.8621 11.6367 18.1971 12.2543 17.8736 12.7067Z"
        fill="black"
      />
    </svg>
  );
}

export function Testimonials() {
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState(0);

  const testimonial = testimonials[selectedTestimonialIndex];

  return (
    <S.Container>
      <Grid
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$8",
        }}
      >
        <S.Content viewport={{ amount: "all" }}>
          <S.QuoteIcon />
          <S.Description>{testimonial.content}</S.Description>
          <S.PersonRoot>
            <S.PersonAvatar src={testimonial.person.avatar} />
            <S.Person>
              <S.PersonTitle>{testimonial.person.title}</S.PersonTitle>
              <S.PersonDescription>
                {testimonial.person.description}
              </S.PersonDescription>
            </S.Person>
          </S.PersonRoot>
        </S.Content>
        <S.PaginationRoot>
          <button
            disabled={selectedTestimonialIndex === 0}
            onClick={() => setSelectedTestimonialIndex((state) => state - 1)}
          >
            <svg
              width="27"
              height="21"
              viewBox="0 0 27 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-4.7174e-07 10.5C5.85205 10.5 10.5961 15.201 10.5961 21M-4.7174e-07 10.5C5.85205 10.5 10.5961 5.79897 10.5961 2.91747e-08M-4.7174e-07 10.5L27 10.5"
                stroke="currentColor"
                strokeWidth="1.06002"
              />
            </svg>
          </button>
          {selectedTestimonialIndex + 1}/{testimonials.length}
          <button
            disabled={selectedTestimonialIndex === testimonials.length}
            onClick={() => {
              if (selectedTestimonialIndex + 1 === testimonials.length) {
                return;
              }

              setSelectedTestimonialIndex((state) => state + 1);
            }}
          >
            <svg
              width="27"
              height="21"
              viewBox="0 0 27 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 10.5C21.148 10.5 16.4039 5.79899 16.4039 0M27 10.5C21.148 10.5 16.4039 15.201 16.4039 21M27 10.5L0 10.5"
                stroke="currentColor"
                strokeWidth="1.06002"
              />
            </svg>
          </button>
        </S.PaginationRoot>
        <S.BottomRoot>
          <strong>explorar</strong>
          <ThunderCircle />
          <strong>criar</strong>
          <ThunderCircle />
          <strong>inovar</strong>
          <ThunderCircle />
          <strong>decolar</strong>
        </S.BottomRoot>
      </Grid>
    </S.Container>
  );
}
