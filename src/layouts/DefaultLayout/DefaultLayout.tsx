import { ReactNode } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsappButton";

import * as S from "./DefaultLayout.styles";

type Props = {
  children: ReactNode;
};

export function DefaultLayout({ children }: Props) {
  return (
    <>
      <Header />
      <S.Root>
        {children}
        <WhatsAppButton />
      </S.Root>
      <Footer />
    </>
  );
}
