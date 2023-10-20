import { GlobeSimple, Package, Users } from "@phosphor-icons/react";
import * as S from "./Stats.styles";

export function Stats() {
  return (
    <S.Container>
      <S.StatItem>
        <S.StatItemAmount>
          27
          <S.StatsItemIcon>
            <GlobeSimple size={24} />
          </S.StatsItemIcon>
        </S.StatItemAmount>
        <S.StatItemTitle>Anos de experiência</S.StatItemTitle>
        <S.StatItemDescription>
          Juntos, somamos mais de 27 anos de experiência.
        </S.StatItemDescription>
      </S.StatItem>
      <S.StatItem>
        <S.StatItemAmount>
          8
          <S.StatsItemIcon>
            <Users size={24} />
          </S.StatsItemIcon>
        </S.StatItemAmount>
        <S.StatItemTitle>Especialistas</S.StatItemTitle>
        <S.StatItemDescription>
          Equipe completa para somar com seu time.
        </S.StatItemDescription>
      </S.StatItem>
      <S.StatItem>
        <S.StatItemAmount>
          15
          <S.StatsItemIcon css={{ transform: "translateX(-12px)" }}>
            <Package size={24} />
          </S.StatsItemIcon>
        </S.StatItemAmount>
        <S.StatItemTitle>Projetos entregues</S.StatItemTitle>
        <S.StatItemDescription>
          Entregas para empresas que investem em design.
        </S.StatItemDescription>
      </S.StatItem>
    </S.Container>
  );
}
