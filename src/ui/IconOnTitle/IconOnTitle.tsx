import * as S from "./IconOnTitle.styles";

export function IconOnTitle() {
  return (
    <S.TitleWithIcon>
      <S.TitleIcon color="salmon">
        <S.LightningIcon weight="fill" />
      </S.TitleIcon>
      <S.TitleIcon color="purple">
        <S.AsteriskIcon />
      </S.TitleIcon>
    </S.TitleWithIcon>
  );
}
