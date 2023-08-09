import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

import * as S from "./OurServices.styles";

export function OurServices() {
  return (
    <S.Container>
      <S.Content>
        <LeftSide />
        <RightSide />
      </S.Content>
    </S.Container>
  );
}
