import cases from "@/data/cases.json";

import * as S from "./Cases.styles";

type Case = keyof typeof cases;

export function Cases() {
  const keys = Object.keys(cases) as Case[];

  return (
    <S.Container>
      {keys.map((key) => (
        <S.CaseItem key={key}>
          <img src={cases[key].card.thumbnail} alt="" />
          <S.CaseItemInfo>
            <strong>{cases[key].card.title}</strong>
            <small>{cases[key].card.description}</small>
          </S.CaseItemInfo>
        </S.CaseItem>
      ))}
    </S.Container>
  );
}
