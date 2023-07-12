import { Section } from "@/layouts";
import { SocialButtonGroup } from "@/ui";

import * as S from "./LeftSide.styles";

export function LeftSide() {
  return (
    <S.Container>
      <Section.SmallTitle>Quem somos</Section.SmallTitle>
      <Section.Title>Conheça a Explow</Section.Title>
      <S.Slogan>exclusivos, digitais & inovadores</S.Slogan>
      <SocialButtonGroup />
    </S.Container>
  );
}
