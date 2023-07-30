import {
  Asterisk,
  Code,
  Lightning,
  MouseSimple,
  Palette,
  RocketLaunch,
} from "@phosphor-icons/react";

import { Divider, Grid, IconOnTitle, SocialButtonGroup } from "@/ui";

import * as S from "./Introduction.styles";

export function Introduction() {
  return (
    <S.Container>
      <Grid>
        <S.Title>
          Estúdio de
          <IconOnTitle />
        </S.Title>
        <S.Title css={{ "@md": { marginTop: "-$3" } }}>
          design e tecnologia
        </S.Title>
        <S.Content>
          <S.DesignAndCodeAndBusiness>
            <span>design & code & business</span>
            <S.IconGroup>
              <Code size={20} />
              <Palette size={20} />
              <RocketLaunch size={20} />
            </S.IconGroup>
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
        </S.Content>
        <Divider
          css={{ marginBlock: "$20 $10", "@md": { marginBlock: "$8" } }}
        />
        <S.BaseRow>
          <S.KeepExploring>
            <MouseSimple size={20} />
            <span>Continue explorando</span>
          </S.KeepExploring>
          <SocialButtonGroup />
        </S.BaseRow>
      </Grid>
    </S.Container>
  );
}
