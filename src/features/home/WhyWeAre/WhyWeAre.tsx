import { Stats } from "./Stats";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

import * as S from "./WhyWeAre.styles";

export function WhyWeAre() {
  return (
    <S.Container as="section">
      <LeftSide />
      <S.Column>
        <RightSide />
        <Stats />
      </S.Column>
    </S.Container>
  );
}
