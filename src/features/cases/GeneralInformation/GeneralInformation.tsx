import { Brazil } from "@/ui/_icons";

import * as S from "./GeneralInformation.styles";

type GeneralInformationProps = {
  country: string;
  state: string;
  tags: string[];
  description: string[];
};

export function GeneralInformation({
  country,
  state,
  tags,
  description,
}: GeneralInformationProps) {
  return (
    <S.Container as="section">
      <S.Box>
        <S.LocationRoot>
          <h3>Localização</h3>
          <h4>
            <Brazil />
            {state}, {country}
          </h4>
        </S.LocationRoot>
        <S.DeliveredRoot>
          <strong>O que fizemos</strong>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </S.DeliveredRoot>
      </S.Box>
      <S.Box css={{ maxWidth: "641px" }}>
        {description.map((paragraph) => (
          <S.Paragraph key={paragraph}>{paragraph}</S.Paragraph>
        ))}
      </S.Box>
    </S.Container>
  );
}
