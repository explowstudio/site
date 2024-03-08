import {
  Code,
  MouseSimple,
  Palette,
  RocketLaunch,
} from "@phosphor-icons/react";

import { Divider, Grid, SocialButtonGroup } from "@/ui";
import { FadeIn, ProgressiveExpansion } from "@/ui/_transitions";

import * as S from "./Introduction.styles";

export function Introduction() {
  return (
    <S.Container>
      <Grid>
        <FadeIn initial={{ y: -40 }} animate={{ y: 0 }}>
          <S.Title>Especialistas em</S.Title>
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
                Desenvolvimento de branding, sistemas, plataformas, aplicativos
                e muito mais
              </h2>
              <p>
                Estamos aqui para descomplicar o complicado trazendo soluções
                que façam com que seu negócio decole no digital.
              </p>
            </S.Description>
          </FadeIn>
        </S.Content>
        <ProgressiveExpansion delay={1.2}>
          <Divider
            css={{
              marginBlock: "$20 $10",
              "@md": { marginBlock: "$8" },
              borderColor: "rgba(248, 248, 248, 0.20)",
            }}
          />
        </ProgressiveExpansion>
        <S.BaseRow initial={{ y: 20 }} animate={{ y: 0 }} delay={2}>
          <S.KeepExploring>
            <MouseSimple size={20} />
            <span>Continue explorando</span>
          </S.KeepExploring>

          <SocialButtonGroup
            css={{
              svg: { color: "$white" },
              "a:hover": {
                background: "$white",
                svg: {
                  color: "$gray800",
                },
              },
            }}
          />
        </S.BaseRow>
      </Grid>
    </S.Container>
  );
}
