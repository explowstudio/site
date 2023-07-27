import { Check } from "@phosphor-icons/react";

import { CheckboxProps } from "@radix-ui/react-checkbox";

import * as S from "./Checkbox.styles";

type Props = {
  label: string;
} & CheckboxProps;

export function Checkbox({ label, name, ...rest }: Props) {
  return (
    <S.Container>
      <S.Root id={name} name={name} {...rest}>
        <S.Indicator>
          <Check />
        </S.Indicator>
      </S.Root>

      {label && <S.Label htmlFor={name}>{label}</S.Label>}
    </S.Container>
  );
}
