import { ReactNode } from "react";

import { Header } from "@/layouts/DefaultLayout/Header";
import { Footer } from "@/layouts/DefaultLayout/Footer";
import { WhatsAppButton } from "@/layouts/DefaultLayout/WhatsappButton";

import * as S from "./ExpertiseLayout.styles";

type Props = {
  children: ReactNode;
};

export function ExpertiseLayout({ children }: Props) {
  return (
    <>
      <Header color="secondary" />
      <S.Root>
        {children}
        <WhatsAppButton />
      </S.Root>
      <Footer />
    </>
  );
}
