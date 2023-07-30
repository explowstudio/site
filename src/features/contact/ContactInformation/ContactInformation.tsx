import { Link } from "@/ui";

import * as S from "./ContactInformation.styles";

export function ContactInformation() {
  return (
    <S.Container>
      <S.ScheduleMeeting>
        <S.PersonAvatar
          src="https://github.com/giovannalinda.png"
          alt="Giovanna Souza"
        />
        <S.InformationContainer>
          <span>Prefere uma reunião?</span>
          <Link
            href="https://cal.com/explow/bate-papo"
            target="_blank"
            color="secondary"
          >
            Agende com a Gio
          </Link>
        </S.InformationContainer>
      </S.ScheduleMeeting>
      <S.InformationContainer>
        <span>E-mail</span>
        <Link href="mailto:contato@explow.studio" color="secondary">
          contato@explow.studio
        </Link>
      </S.InformationContainer>
      <S.InformationContainer>
        <span>Telefone</span>
        <Link
          href="https://api.whatsapp.com/send?phone=5511970419304"
          target="_blank"
          color="secondary"
        >
          (11) 97041-9304
        </Link>
      </S.InformationContainer>
    </S.Container>
  );
}
