import { Grid, SocialButtonGroup } from "@/ui";
import { Mouse } from "@/ui/_icons";

import * as S from "./Introduction.styles";

type IntroductionProps = {
  title: string;
  description: string;
  image: string;
};

export function Introduction({ title, description, image }: IntroductionProps) {
  return (
    <section>
      <S.Container>
        <div>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.ScrollRoot>
            <Mouse />
            <span>Role e sinta a experiência</span>
          </S.ScrollRoot>
        </div>
        <S.SloganRoot>
          <S.Slogan>
            exclusivos,
            <br />
            digitais &
            <br />
            inovadores
          </S.Slogan>
          <SocialButtonGroup />
        </S.SloganRoot>
      </S.Container>
      <S.Cover src={image} />
    </section>
  );
}
