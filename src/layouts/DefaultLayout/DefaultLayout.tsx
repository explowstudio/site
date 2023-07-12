import { ReactNode } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsappButton";

type Props = {
  children: ReactNode;
};

export function DefaultLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>
        {children}
        <WhatsAppButton />
      </main>
      <Footer />
    </>
  );
}
