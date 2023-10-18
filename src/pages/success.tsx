import { Introduction } from "@/features/success";
import { ContactLayout } from "@/layouts/ContactLayout";
import { SEO } from "@/lib";

export default function Contact() {
  return (
    <>
      <SEO title="Explow | Contato enviado" />
      <ContactLayout>
        <Introduction />
      </ContactLayout>
    </>
  );
}
