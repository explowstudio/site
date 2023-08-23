import { Marquee } from "@/ui";

import * as S from "./Companies.styles";

export function Companies() {
  return (
    <S.Root gradient>
      <Marquee.Content>
        <S.Row>
          <S.PartnerLogo src="/partners/finbits.svg" alt="Finbits" />
          <S.PartnerLogo src="/partners/captei.svg" alt="Captei" />
          <S.PartnerLogo src="/partners/advco.svg" alt="adv.co" />
          <S.PartnerLogo src="/partners/skina.svg" alt="skina" />
          <S.PartnerLogo
            src="/partners/eztraordinario.svg"
            alt="Eztraordinario"
          />
        </S.Row>
      </Marquee.Content>
    </S.Root>
  );
}
