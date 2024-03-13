import Image from "next/image";

import { Grid } from "@/ui";
import { Section } from "@/layouts";
import { FadeIn } from "@/ui/_transitions";

import * as S from "./OurPartners.styles";

export function OurPartners() {
  return (
    <S.Container as="section">
      <Grid>
        <FadeIn.WhileInView delay={0.2}>
          <Section.SmallTitle variant="secondary">
            Nossos clientes
          </Section.SmallTitle>
          <Section.Title variant="secondary">
            Conheça alguns parceiros que cresceram com a Explow
          </Section.Title>
          <Section.Description variant="secondary">
            Queremos ser parceiros de empresas que entendem que um
            desenvolvimento bem estruturado pode fazer a diferença.
          </Section.Description>
        </FadeIn.WhileInView>
        <S.Partners>
          <S.Partner as={FadeIn.WhileInView}>
            <Image
              src="/partners/advco.svg"
              alt="adv.co"
              width={111}
              height={36}
            />
          </S.Partner>
          <S.Partner as={FadeIn.WhileInView} delay={0.4}>
            <Image
              src="/partners/labmine.svg"
              alt="Labmine"
              width={185}
              height={38}
            />
          </S.Partner>
          <S.Partner as={FadeIn.WhileInView} delay={0.6}>
            <Image
              src="/partners/finbits.svg"
              alt="Finbits"
              width={130}
              height={31}
            />
          </S.Partner>
          <S.Partner as={FadeIn.WhileInView} delay={0.8}>
            <Image
              src="/partners/certimine.svg"
              alt="Certimine"
              width={203}
              height={36}
            />
          </S.Partner>
          <S.Partner as={FadeIn.WhileInView} delay={1.2}>
            <Image
              src="/partners/setfin.svg"
              alt="Setfin"
              width={152}
              height={33}
            />
          </S.Partner>
          <S.Partner as={FadeIn.WhileInView} delay={1.4}>
            <Image
              src="/partners/easygroup.svg"
              alt="Easygroup"
              width={211}
              height={42}
            />
          </S.Partner>
          <S.Partner as={FadeIn.WhileInView} delay={1.6}>
            <Image
              src="/partners/robotip.svg"
              alt="RoboTip"
              width={179}
              height={50}
            />
          </S.Partner>
          <S.Partner as={FadeIn.WhileInView} delay={1.8}>
            <Image
              src="/partners/minery.svg"
              alt="Minery"
              width={160}
              height={40}
            />
          </S.Partner>
          <S.Partner as={FadeIn.WhileInView} delay={2}>
            <Image
              src="/partners/captei.svg"
              alt="Captei"
              width={156}
              height={30}
            />
          </S.Partner>
          <S.Partner as={FadeIn.WhileInView} delay={2.2}>
            <Image
              src="/partners/skina.svg"
              alt="Skina"
              width={101}
              height={33}
            />
          </S.Partner>
        </S.Partners>
      </Grid>
    </S.Container>
  );
}
