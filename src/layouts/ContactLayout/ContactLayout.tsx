import { ReactNode } from "react";

import { Header } from "@/layouts/DefaultLayout/Header";
import { Footer } from "@/layouts/DefaultLayout/Footer";
import { WhatsAppButton } from "@/layouts/DefaultLayout/WhatsappButton";
import { Faq } from "@/layouts/DefaultLayout/Faq";

import { Grid } from "@/ui";

import * as S from "./ContactLayout.styles";

type Props = {
  children: ReactNode;
};

export function ContactLayout({ children }: Props) {
  return (
    <>
      <Header color="secondary" />
      <main>
        {children}
        <Grid as="section">
          <Faq />
        </Grid>
        <WhatsAppButton />
      </main>
      <Footer />
    </>
  );
}

ContactLayout.Section = S.Section;
ContactLayout.Title = S.Title;
ContactLayout.Description = S.Description;
ContactLayout.FormGroup = S.FormGroup;
