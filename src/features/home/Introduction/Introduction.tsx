import {
  Code,
  MouseSimple,
  Palette,
  RocketLaunch,
} from "@phosphor-icons/react";

import { Divider, Grid, IconOnTitle, SocialButtonGroup } from "@/ui";
import { FadeIn, ProgressiveExpansion } from "@/ui/_transitions";

import * as S from "./Introduction.styles";

export function Introduction() {
  return (
    <S.Container>
      <Grid>
        <FadeIn initial={{ y: -40 }} animate={{ y: 0 }}>
          <S.Title>
            Estúdio de
            <IconOnTitle />
          </S.Title>
          <S.Title css={{ "@md": { marginTop: "-$3" } }}>
            design e tecnologia
          </S.Title>
        </FadeIn>
        <S.Content>
          <FadeIn initial={{ x: -20 }} animate={{ x: 0 }} delay={0.4}>
            <S.DesignAndCodeAndBusiness>
              <span>design & code & business</span>
              <S.IconGroup>
                <Code size={20} />
                <Palette size={20} />
                <RocketLaunch size={20} />
              </S.IconGroup>
            </S.DesignAndCodeAndBusiness>
          </FadeIn>
          <FadeIn initial={{ x: 20 }} animate={{ x: 0 }} delay={0.4}>
            <S.Description>
              <h2>
                Somos o braço que sua empresa precisa para decolar no digital
              </h2>
              <p>
                E não paramos até entregar um resultado que seja nada menos que
                excelente.
              </p>
            </S.Description>
          </FadeIn>
        </S.Content>
        <ProgressiveExpansion delay={1.2}>
          <Divider
            css={{ marginBlock: "$20 $10", "@md": { marginBlock: "$8" } }}
          />
        </ProgressiveExpansion>
        <S.BaseRow initial={{ y: 20 }} animate={{ y: 0 }} delay={2}>
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
