import { ComponentProps } from "react";
import { motion } from "framer-motion";

import { Link, Logo } from "@/ui";
import { ContactButton } from "@/features/contact";

import { useHeader } from "./useHeader";
import * as S from "./Header.styles";

const BUTTON_COLOR = {
  primary: "primary",
  secondary: "secondary",
  transparent: "secondary",
} as any;

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
        <Logo color={headerStyles.logoColor} />
        <nav>
          <S.NavigationList>
            <Link
              as={motion.a}
              href="/"
              style={{ color: headerStyles.logoColor }}
              color="quarter"
            >
              Home
            </Link>
            <Link
              as={motion.a}
              href="/about-us"
              style={{ color: headerStyles.logoColor }}
              color="quarter"
            >
              Quem somos
            </Link>
            <Link
              as={motion.a}
              href="/expertise"
              style={{ color: headerStyles.logoColor }}
              color="quarter"
            >
              Expertise
            </Link>
            <Link
              as={motion.a}
              href="/#cases"
              style={{ color: headerStyles.logoColor }}
              color="quarter"
            >
              Cases
            </Link>
          </S.NavigationList>
        </nav>
        <ContactButton
          variant={BUTTON_COLOR[color as any]}
          css={{
            "@md": {
              display: "none",
            },
          }}
        />
      </S.Content>
    </S.Container>
  );
}
