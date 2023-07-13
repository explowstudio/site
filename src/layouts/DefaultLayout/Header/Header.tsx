import { ArrowRight, CaretDown } from "@phosphor-icons/react";

import { Button, Link, Logo, Dropdown } from "@/ui";

import * as S from "./Header.styles";

export function Header() {
  return (
    <>
      <S.Container>
        <S.Content>
          <Logo />
          <nav>
            <S.NavigationList>
              <Link href="/">Home</Link>
              <Link href="/">Quem somos</Link>
              <S.NavItemDrop>
                <Link href="/" linkUnderline={false}>
                  Expertise
                  <S.CaretDownIcon />
                </Link>
              </S.NavItemDrop>
              <Link href="/">Cases</Link>
            </S.NavigationList>
          </nav>
          <Button>
            Conheça a Explow
            <ArrowRight size={18} weight="bold" />
          </Button>
        </S.Content>
      </S.Container>
      <Dropdown />
    </>
  );
}
