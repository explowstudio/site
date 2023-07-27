import { Grid } from "@/ui";
import { Section } from "@/layouts";

import * as S from "./OurMethodology.styles";

export function OurMethodology() {
  return (
    <S.Container>
      <Grid>
        <S.Row>
          <div>
            <Section.SmallTitle variant="secondary">
              Nossa metodologia
            </Section.SmallTitle>
            <Section.Title variant="secondary">
              Como isso funciona na prática?
            </Section.Title>
          </div>
          <S.Description>
            Ter uma metodologia em um processo de criação de produtos digitais é
            importante para garantir organização, eficiência e qualidade desde a
            concepção até o lançamento.
          </S.Description>
        </S.Row>
        <img src="/sections/methodology.svg" alt="Methodology" />
      </Grid>
      <S.BottomText>Design /// Code & Business</S.BottomText>
    </S.Container>
  );
}
