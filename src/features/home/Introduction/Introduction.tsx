import Link from "next/link";

import {
  Asterisk,
  Code,
  InstagramLogo,
  Lightning,
  MouseSimple,
  Palette,
  RocketLaunch,
} from "@phosphor-icons/react";

import { Divider, Grid, IconButton, SocialButtonGroup } from "@/ui";
import { MediumLogo, LinkedInLogo } from "@/ui/_icons";

import * as S from "./Introduction.styles";

export function Introduction() {
  return (
    <S.Container>
      <Grid>
        <S.Title>
          Estúdio de
          <S.TitleWithIcon>
            <S.TitleIcon color="salmon">
              <Lightning size={28} weight="fill" />
            </S.TitleIcon>
            <S.TitleIcon color="purple">
              <Asterisk size={28} />
            </S.TitleIcon>
          </S.TitleWithIcon>
        </S.Title>
        <S.Title>design e tecnologia</S.Title>
        <S.Row css={{ marginTop: "$20", alignItems: "flex-start" }}>
          <S.DesignAndCodeAndBusiness>
            <span>design & code & business</span>
            <Code size={20} />
            <Palette size={20} />
            <RocketLaunch size={20} />
          </S.DesignAndCodeAndBusiness>
          <S.Description>
            <h2>
              Estamos aqui para transformar problemas em soluções singulares.
            </h2>
            <p>
              E não paramos até entregar um resultado que seja nada menos que
              excelente.
            </p>
          </S.Description>
        </S.Row>
        <Divider css={{ marginBlock: "$20 $10" }} />
        <S.Row>
          <S.KeepExploring>
            <MouseSimple size={20} />
            <span>Continue explorando</span>
          </S.KeepExploring>
          <SocialButtonGroup />
        </S.Row>
      </Grid>
    </S.Container>
  );
}
