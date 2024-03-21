import { useRouter } from "next/router";

import { Link } from "@/ui";
import { ArrowRight } from "@phosphor-icons/react";

import cases from "@/data/cases.json";

import * as S from "./Cases.styles";

type Case = keyof typeof cases;

export function Cases() {
  const router = useRouter();
  const keys = Object.keys(cases) as Case[];

  return (
    <S.Container>
      {keys.map((key) => (
        <S.CaseItem
          key={key}
          onClick={() => router.push(`./cases/${cases[key].slug}`)}
        >
          <img src={cases[key].card.thumbnail} alt="" />
          <S.CaseItemInfo>
            <strong>{cases[key].card.title}</strong>
            <small>{cases[key].card.description}</small>
          </S.CaseItemInfo>
          <Link href={`./cases/${cases[key].slug}`}>
            Ver mais
            <ArrowRight />
          </Link>
        </S.CaseItem>
      ))}
    </S.Container>
  );
}
