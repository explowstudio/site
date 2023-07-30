import { Stats } from "./Stats";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

import * as S from "./WhyWeAre.styles";

export function WhyWeAre() {
  return (
    <S.Wrapper>
      <S.Container>
        <LeftSide />
        <S.Column>
          <RightSide />
        </S.Column>
      </S.Container>
      <S.Container
        css={{
          "@media (max-width: 888px)": {
            gridTemplateColumns: "1fr",
          },
        }}
      >
        <S.Fragment />
        <Stats />
      </S.Container>
    </S.Wrapper>
  );
}
