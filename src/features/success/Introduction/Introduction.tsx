import { Grid, IconOnTitle } from "@/ui";
import { ContactInformation } from "@/features/contact";

import * as S from "./Introduction.styles";

export function Introduction() {
  return (
    <S.Container>
      <Grid>
        <S.Title>
          Obrigado por <IconOnTitle />
        </S.Title>
        <S.Title css={{ "@md": { marginTop: "-$3" } }}>
          entrar em contato!
        </S.Title>

        <S.Description>
          Recebemos seu formulário e hoje mesmo já entraremos em contato para
          dar seguimento com o seu atendimento para desenvolvermos um projeto de
          outro mundo 🛸
        </S.Description>

        <ContactInformation />
      </Grid>
    </S.Container>
  );
}
