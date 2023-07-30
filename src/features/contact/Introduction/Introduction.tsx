import { Grid, IconOnTitle } from "@/ui";
import { ContactInformation } from "@/features/contact";

import * as S from "./Introduction.styles";

export function Introduction() {
  return (
    <S.Container>
      <Grid>
        <S.Title>Queremos ser seus</S.Title>
        <S.Title>
          parceiros
          <IconOnTitle />
        </S.Title>

        <ContactInformation />
      </Grid>
    </S.Container>
  );
}
