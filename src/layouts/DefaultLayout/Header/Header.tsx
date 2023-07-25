import { ArrowRight } from "@phosphor-icons/react";

import { Button, Link, Logo } from "@/ui";

import { Dropdown } from "./Dropdown";
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
              <S.NavigationItemWithDropdown>
                Expertise
                <S.CaretDownIcon />
                <Dropdown />
              </S.NavigationItemWithDropdown>
              <Link href="/">Cases</Link>
            </S.NavigationList>
          </nav>
          <Button>
            Conheça a Explow
            <ArrowRight size={18} weight="bold" />
          </Button>
        </S.Content>
      </S.Container>
    </>
  );
}
