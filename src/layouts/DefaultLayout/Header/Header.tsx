import { ComponentProps } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import NextLink from "next/link";

import { Button, Link, Logo } from "@/ui";

import { Dropdown } from "./Dropdown";
import * as S from "./Header.styles";

export function Header({
  color = "primary",
  ...rest
}: ComponentProps<typeof S.Container>) {
  return (
    <S.Container color={color} {...rest}>
      <S.Content>
        <Logo color={color === "primary" ? "black" : "white"} />
        <nav>
          <S.NavigationList>
            <Link href="/" color={color}>
              Home
            </Link>
            <Link href="/" color={color}>
              Quem somos
            </Link>
            <S.NavigationItemWithDropdown color={color}>
              Expertise
              <S.CaretDownIcon />
              <Dropdown color={color} />
            </S.NavigationItemWithDropdown>
            <Link href="/" color={color}>
              Cases
            </Link>
          </S.NavigationList>
        </nav>
        <Button variant={color} as={NextLink} href="/contact">
          Conheça a Explow
          <ArrowRight size={18} weight="bold" />
        </Button>
      </S.Content>
    </S.Container>
  );
}
