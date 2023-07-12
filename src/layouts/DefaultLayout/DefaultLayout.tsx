import { ReactNode } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Faq } from "./Faq";

type Props = {
  children: ReactNode;
};

export function DefaultLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
