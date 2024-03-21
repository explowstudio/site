import { GlobeSimple, Package, Users } from "@phosphor-icons/react";
import * as S from "./Stats.styles";

export function Stats() {
  return (
    <S.Container>
      <S.StatItem>
        <S.StatItemAmount>
          2023
          <S.StatsItemIcon>
            <GlobeSimple size={24} />
          </S.StatsItemIcon>
        </S.StatItemAmount>
        <S.StatItemTitle>Fundação</S.StatItemTitle>
        <S.StatItemDescription>
          Unidos, temos mais de 30 anos de experiência
        </S.StatItemDescription>
      </S.StatItem>
      <S.StatItem>
        <S.StatItemAmount>
          +11
          <S.StatsItemIcon>
            <Users size={24} />
          </S.StatsItemIcon>
        </S.StatItemAmount>
        <S.StatItemTitle>Especialistas</S.StatItemTitle>
        <S.StatItemDescription>
          Equipe completa para somar com seu negócio
        </S.StatItemDescription>
      </S.StatItem>
      <S.StatItem>
        <S.StatItemAmount>
          +19
          <S.StatsItemIcon css={{ transform: "translateX(-12px)" }}>
            <Package size={24} />
          </S.StatsItemIcon>
        </S.StatItemAmount>
        <S.StatItemTitle>Projetos entregues</S.StatItemTitle>
        <S.StatItemDescription>
          Para empresas que investem em qualidade
        </S.StatItemDescription>
      </S.StatItem>
    </S.Container>
  );
}
