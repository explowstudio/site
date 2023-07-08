import { ArrowRight, CaretDown } from "@phosphor-icons/react";

import { Button, Logo } from "@/ui";

import * as S from "./Header.styles";
import Link from "next/link";

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <Logo />
        <nav>
          <S.NavigationList>
            <S.NavigationItem as={Link} href="/">
              Home
            </S.NavigationItem>
            <S.NavigationItem as={Link} href="/">
              Quem somos
            </S.NavigationItem>
            <S.NavigationItem as={Link} href="/" linkUnderline={false}>
              Expertise
              <CaretDown />
            </S.NavigationItem>
            <S.NavigationItem as={Link} href="/">
              Cases
            </S.NavigationItem>
          </S.NavigationList>
        </nav>
        <Button>
          Conheça a Explow
          <ArrowRight size={18} weight="bold" />
        </Button>
      </S.Content>
    </S.Container>
  );
}
