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
        <S.CaseItemTitle>Captei</S.CaseItemTitle>
        <S.CaseItemDescription>
          Lorem ipsum dolor sit amet consectetur. Quam facilisi habitasse
          tristique phasellus sit. Mattis vulputate amet.
        </S.CaseItemDescription>
        <S.Tags>
          <S.CaseTag>Design</S.CaseTag>
          <S.CaseTag>Front-End</S.CaseTag>
          <S.CaseTag>Sistema</S.CaseTag>
        </S.Tags>
      </S.CaseItem>
      <S.CaseItem>
        <S.CaseItemImage
          src="/cases/easygroup.svg"
          alt="Captei"
          width={550}
          height={640}
        />
        <S.CaseItemTitle>EasyGroup</S.CaseItemTitle>
        <S.CaseItemDescription>
          Lorem ipsum dolor sit amet consectetur. Quam facilisi habitasse
          tristique phasellus sit. Mattis vulputate amet.
        </S.CaseItemDescription>
        <S.Tags>
          <S.CaseTag>Design</S.CaseTag>
          <S.CaseTag>Front-End</S.CaseTag>
          <S.CaseTag>Sistema</S.CaseTag>
        </S.Tags>
      </S.CaseItem>
      <S.CaseItem>
        <S.CaseItemImage src="/cases/captei.svg" alt="Captei" />
        <S.CaseItemTitle>Finbits</S.CaseItemTitle>
        <S.CaseItemDescription>
          Lorem ipsum dolor sit amet consectetur. Quam facilisi habitasse
          tristique phasellus sit. Mattis vulputate amet.
        </S.CaseItemDescription>
        <S.Tags>
          <S.CaseTag>Design</S.CaseTag>
          <S.CaseTag>Front-End</S.CaseTag>
          <S.CaseTag>Sistema</S.CaseTag>
        </S.Tags>
      </S.CaseItem>
      <S.CaseItem>
        <S.CaseItemImage src="/cases/captei.svg" alt="Captei" />
        <S.CaseItemTitle>Skina</S.CaseItemTitle>
        <S.CaseItemDescription>
          Lorem ipsum dolor sit amet consectetur. Quam facilisi habitasse
          tristique phasellus sit. Mattis vulputate amet.
        </S.CaseItemDescription>
        <S.Tags>
          <S.CaseTag>Design</S.CaseTag>
          <S.CaseTag>Front-End</S.CaseTag>
          <S.CaseTag>Sistema</S.CaseTag>
        </S.Tags>
      </S.CaseItem>
      <S.CaseItem>
        <S.CaseItemImage src="/cases/captei.svg" alt="Captei" />
        <S.CaseItemTitle>Eztraordinário</S.CaseItemTitle>
        <S.CaseItemDescription>
          Lorem ipsum dolor sit amet consectetur. Quam facilisi habitasse
          tristique phasellus sit. Mattis vulputate amet.
        </S.CaseItemDescription>
        <S.Tags>
          <S.CaseTag>Design</S.CaseTag>
          <S.CaseTag>Front-End</S.CaseTag>
          <S.CaseTag>Sistema</S.CaseTag>
        </S.Tags>
      </S.CaseItem>
      <S.CaseItem>
        <S.CaseItemImage src="/cases/captei.svg" alt="Captei" />
        <S.CaseItemTitle>adv.co</S.CaseItemTitle>
        <S.CaseItemDescription>
          Lorem ipsum dolor sit amet consectetur. Quam facilisi habitasse
          tristique phasellus sit. Mattis vulputate amet.
        </S.CaseItemDescription>
        <S.Tags>
          <S.CaseTag>Design</S.CaseTag>
          <S.CaseTag>Front-End</S.CaseTag>
          <S.CaseTag>Sistema</S.CaseTag>
        </S.Tags>
      </S.CaseItem>
    </S.Container>
  );
}
