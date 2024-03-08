import { Grid } from "@/ui";

import * as S from "./Impact.styles";

type ImpactProps = {
  title: string;
  items: {
    title: string;
    description: string;
  }[];
};

export function Impact({ title, items }: ImpactProps) {
  return (
    <Grid as="section" css={{ paddingBlock: "83px 198px" }}>
      <S.Title>{title}</S.Title>
      <S.List>
        {items.map((item, index) => (
          <S.ListItem key={item.title}>
            <S.Number>0{index + 1}</S.Number>
            <S.ListItemInfo>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </S.ListItemInfo>
          </S.ListItem>
        ))}
      </S.List>
    </Grid>
  );
}
