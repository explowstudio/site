import { ComponentProps } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import NextLink from "next/link";

import { Button, Link, Logo } from "@/ui";

import { useHeader } from "./useHeader";
import * as S from "./Header.styles";

export function Header({
  color = "primary",
  ...rest
}: ComponentProps<typeof S.Container>) {
  const headerStyles = useHeader({
    color,
  });

  return (
    <S.Container color={color} style={headerStyles} {...rest}>
      <S.Content>
        <Logo color={color === "primary" ? "black" : "white"} />
        <nav>
          <S.NavigationList>
            <Link href="/" color={color}>
              Home
            </Link>
            <Link href="/about-us" color={color}>
              Quem somos
            </Link>
            <Link href="/expertise" color={color}>
              Expertise
            </Link>
            <Link href="/#cases" color={color}>
              Cases
            </Link>
          </S.NavigationList>
        </nav>
        <Button
          variant={color}
          as={NextLink}
          href="/contact"
          css={{
            "@md": {
              display: "none",
            },
          }}
        >
          Conheça a Explow
          <ArrowRight size={18} weight="bold" />
        </Button>
      </S.Content>
    </S.Container>
  );
}
