import phoneUtil from "libphonenumber-js";

type Props = {
  name: string;
  company: string;
  email: string;
  phoneNumber: string;
  scope: string[];
  investAmount: number;
  deadline: string;
  additionalInformation: string;
};

export function ContactEmailTemplate({
  name,
  company,
  email,
  phoneNumber,
  scope,
  deadline,
  investAmount,
  additionalInformation,
}: Props) {
  const phoneNumberWithoutFormat = phoneUtil(
    phoneNumber,
    "BR",
  )?.number.toString();

  return (
    <div>
      <h3>Olá, {name} lhe enviou um briefing!</h3>
      <p>
        Recebemos uma nova solicitação de projeto. Abaixo seguem os detalhes:
      </p>

      <ul>
        <li>Empresa: {company}</li>
        <li>E-mail: {email}</li>
        <li>WhatsApp: {phoneNumber}</li>
        <li>Escopo: {scope}</li>
        <li>Prazo de entrega: {deadline}</li>
        <li>Valor para investir: {investAmount}</li>
      </ul>
      <br />
      <h3>Aqui vai mais detalhes sobre o projeto:</h3>
      <p>{additionalInformation}</p>
      <a
        href={`https://wa.me/${phoneNumberWithoutFormat}?text=Oi%20${name},%20Giovanna%20da%20Explow%20aqui!%20Recebemos%20seu%20contato%20atrav%C3%A9s%20do%20nosso%20formul%C3%A1rio,%20podemos%20marcar%20um%20bate%20papo%20pra%20entendermos%20como%20podemos%20ajudar%20seu%20neg%C3%B3cio?`}
        style={{
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Conversar no WhatsApp
      </a>
    </div>
  );
}
