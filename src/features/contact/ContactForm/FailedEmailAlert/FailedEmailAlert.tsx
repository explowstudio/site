import { Alert, Link } from "@/ui";

export function FailedEmailAlert() {
  return (
    <Alert.Root variant="error">
      <Alert.Title>Ocorreu um erro ao entrar em contato</Alert.Title>
      <Alert.Description>
        Entre em contato conosco usando nossos canais de atendimento:
      </Alert.Description>
      <Alert.Description>
        <small>
          WhatsApp:{" "}
          <Link
            href="https://api.whatsapp.com/send?phone=5511970419304"
            target="_blank"
          >
            (11) 97041-9304
          </Link>
        </small>
        <br />
        <small>
          E-mail:{" "}
          <Link href="mailto:contato@explow.studio" target="_blank">
            contato@explow.studio
          </Link>
        </small>
      </Alert.Description>
    </Alert.Root>
  );
}
