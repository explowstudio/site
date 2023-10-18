import { SEO } from "@/lib";
import { ContactLayout } from "@/layouts";
import { ContactForm, Introduction, Rules } from "@/features/contact";

export default function Contact() {
  return (
    <>
      <SEO
        title="Explow | Faça um orçamento"
        description="Vamos discutir o investimento necessário para impulsionar o seu negócio"
      />
      <ContactLayout>
        <Introduction />
        <ContactLayout.Section>
          <div>
            <ContactLayout.Title>
              Nos conte sobre o seu projeto 🛸
            </ContactLayout.Title>
            <ContactLayout.Description>
              Nos conte um pouco sobre o seu projeto e como poderemos te ajudar,
              entraremos em contato com você hoje pelo seu número de WhatsApp
              para desenvolver um projeto de outro mundo!
            </ContactLayout.Description>
          </div>
          <ContactLayout.FormGroup>
            <ContactForm />
            <Rules />
          </ContactLayout.FormGroup>
        </ContactLayout.Section>
      </ContactLayout>
    </>
  );
}
