import { MouseEvent, useState } from "react";

import { ArrowRight } from "@phosphor-icons/react";
import * as RadioGroup from "@radix-ui/react-radio-group";

import { Button, Checkbox, Radio } from "@/ui";

import * as S from "./ContactForm.styles";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [content, setContent] = useState("");

  const [amount, setAmount] = useState<string | null>(null);
  const [deadline, setDeadline] = useState<string>("");
  const [scope, setScope] = useState<string[]>([]);

  function handleAmount(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    setAmount(event.currentTarget.name);
  }

  function handleScope(event: MouseEvent<HTMLButtonElement>) {
    const newValue = event.currentTarget.name;

    if (scope.includes(newValue)) {
      return setScope((state) =>
        state.filter((scopeItem) => scopeItem !== newValue),
      );
    }

    setScope((state) => [...state, newValue]);
  }

  return (
    <S.Container>
      <S.Title>Nos conte sobre o seu projeto 🛸</S.Title>
      <S.Description>
        Nos conte um pouco sobre o seu projeto e como poderemos te ajudar,
        entraremos em contato com você hoje pelo seu número de WhatsApp para
        desenvolver um projeto de outro mundo!
      </S.Description>

      <S.Form>
        <S.FieldGroup>
          <S.Field>
            <S.Label htmlFor="name">Nome</S.Label>
            <S.Input
              id="name"
              value={name}
              onChange={(event) => setName(event.currentTarget.value)}
            />
          </S.Field>
          <S.Field>
            <S.Label htmlFor="company">Nome da empresa</S.Label>
            <S.Input
              id="company"
              value={company}
              onChange={(event) => setCompany(event.currentTarget.value)}
            />
          </S.Field>
          <S.Field>
            <S.Label htmlFor="email">E-mail</S.Label>
            <S.Input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
          </S.Field>
          <S.Field>
            <S.Label htmlFor="whatsapp">WhatsApp</S.Label>
            <S.Input
              id="whatsapp"
              placeholder="DDD + Número"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.currentTarget.value)}
            />
          </S.Field>
        </S.FieldGroup>
        <S.Field>
          <label>Como podemos ajudar?</label>
          <S.FieldGroup css={{ rowGap: "$6", marginTop: "$3" }}>
            <Checkbox
              name="UI/UX Design"
              label="UI/UX Design"
              onClick={handleScope}
            />
            <Checkbox name="Identidade visual" label="Identidade visual" />
            <Checkbox name="Programação web" label="Programação web" />
            <Checkbox name="Programação de app" label="Programação de app" />
          </S.FieldGroup>
        </S.Field>
        <S.Field>
          <label>Qual o prazo que temos para a entrega?</label>
          <RadioGroup.Root value={deadline} onValueChange={setDeadline}>
            <S.FieldGroup css={{ rowGap: "$6", marginTop: "$3" }}>
              <Radio label="1 a 2 meses" value="1 a 2 meses" />
              <Radio label="3 a 4 meses" value="3 a 4 meses" />
              <Radio
                label="Prazo não é problema"
                value="Prazo não é problema"
              />
              <Radio
                label="Preciso com urgência*"
                value="Preciso com urgência*"
              />
            </S.FieldGroup>
          </RadioGroup.Root>
        </S.Field>
        <S.Field>
          <label>Quanto você espera investir?</label>
          <S.TagGroup>
            {[
              "Menor que R$ 10 mil",
              "R$ 30-50 mil",
              "R$ 50-80 mil",
              "Acima de R$ 100 mil",
            ].map((tagAmount) => (
              <S.Tag
                key={tagAmount}
                name={tagAmount}
                selected={amount === tagAmount}
                onClick={handleAmount}
              >
                {tagAmount}
              </S.Tag>
            ))}
          </S.TagGroup>
        </S.Field>
        <S.Field>
          <S.Label htmlFor="content">
            E pra finalizar, nos conte detalhes sobre seu projeto
          </S.Label>
          <S.TextArea
            id="content"
            value={content}
            onChange={(event) => setContent(event.currentTarget.value)}
          />
        </S.Field>
        <Button type="submit" css={{ marginRight: "auto" }}>
          Enviar
          <ArrowRight />
        </Button>
      </S.Form>
    </S.Container>
  );
}
