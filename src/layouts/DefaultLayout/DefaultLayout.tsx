import { ReactNode } from "react";
import { ComponentProps } from "@stitches/react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsappButton";

import * as S from "./DefaultLayout.styles";

type Props = { color?: "primary" | "transparent" | "white" } & ComponentProps<
  typeof S.Root
>;

export function DefaultLayout({ color, children, ...rest }: Props) {
  return (
    <>
      <Header color={color} />
      <S.Root {...rest}>
        {children}
        <WhatsAppButton />
      </S.Root>
      <Footer />
    </>
  );
}
