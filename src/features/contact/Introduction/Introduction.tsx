import { Grid, IconOnTitle, Link } from "@/ui";

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

        <S.ContactInformation>
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
                color="tertiary"
              >
                Agende com a Gio
              </Link>
            </S.InformationContainer>
          </S.ScheduleMeeting>
          <S.InformationContainer>
            <span>E-mail</span>
            <Link href="mailto:contato@explow.studio" color="tertiary">
              contato@explow.studio
            </Link>
          </S.InformationContainer>
          <S.InformationContainer>
            <span>Telefone</span>
            <Link
              href="https://api.whatsapp.com/send?phone=5511970419304"
              target="_blank"
              color="tertiary"
            >
              (11) 97041-9304
            </Link>
          </S.InformationContainer>
        </S.ContactInformation>
      </Grid>
    </S.Container>
  );
}
