import { FormEvent, MouseEvent, useState } from "react";

import { ArrowRight } from "@phosphor-icons/react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import InputMask from "react-input-mask";

import { Button, Checkbox, Radio } from "@/ui";

import * as S from "./ContactForm.styles";
import { SendContactResolver } from "./ContactForm.schema";
import { fromZodError } from "zod-validation-error";

type FormError = {
  field: string;
  message: string;
};

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [content, setContent] = useState("");

  const [amount, setAmount] = useState<string | null>(null);
  const [deadline, setDeadline] = useState<string | null>(null);
  const [scope, setScope] = useState<string[]>([]);

  const [errors, setErrors] = useState<Record<string, string>>();

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = {
      name,
      email,
      company,
      phoneNumber,
      content,
      amount,
      deadline,
      scope,
    };

    const result = SendContactResolver.safeParse(payload);

    if (!result.success) {
      const fromZod = result.error.errors.reduce(
        (acc, error) => ({
          ...acc,
          [error.path[0]]: error.message,
        }),
        {},
      );

      setErrors(fromZod);
    }
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FieldGroup>
        <S.Field>
          <S.Label htmlFor="name">Nome</S.Label>
          <S.Input
            id="name"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
          />
          {errors?.name && <S.ErrorMessage>{errors.name}</S.ErrorMessage>}
        </S.Field>
        <S.Field>
          <S.Label htmlFor="company">Nome da empresa</S.Label>
          <S.Input
            id="company"
            value={company}
            onChange={(event) => setCompany(event.currentTarget.value)}
          />
          {errors?.company && <S.ErrorMessage>{errors.company}</S.ErrorMessage>}
        </S.Field>
        <S.Field>
          <S.Label htmlFor="email">E-mail</S.Label>
          <S.Input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          {errors?.email && <S.ErrorMessage>{errors.email}</S.ErrorMessage>}
        </S.Field>
        <S.Field>
          <S.Label htmlFor="whatsapp">WhatsApp</S.Label>
          <S.Input
            as={InputMask}
            mask="(99) 99999-9999"
            maskChar={null}
            id="whatsapp"
            placeholder="DDD + Número"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          {errors?.phoneNumber && (
            <S.ErrorMessage>{errors.phoneNumber}</S.ErrorMessage>
          )}
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
        {errors?.scope && <S.ErrorMessage>{errors.scope}</S.ErrorMessage>}
      </S.Field>
      <S.Field>
        <label>Qual o prazo que temos para a entrega?</label>
        <RadioGroup.Root
          value={deadline ?? undefined}
          onValueChange={setDeadline}
        >
          <S.FieldGroup css={{ rowGap: "$6", marginTop: "$3" }}>
            <Radio label="1 a 2 meses" value="1 a 2 meses" />
            <Radio label="3 a 4 meses" value="3 a 4 meses" />
            <Radio label="Prazo não é problema" value="Prazo não é problema" />
            <Radio
              label="Preciso com urgência*"
              value="Preciso com urgência*"
            />
          </S.FieldGroup>
        </RadioGroup.Root>
        {errors?.deadline && <S.ErrorMessage>{errors.deadline}</S.ErrorMessage>}
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
        {errors?.amount && <S.ErrorMessage>{errors.amount}</S.ErrorMessage>}
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
        {errors?.content && <S.ErrorMessage>{errors.content}</S.ErrorMessage>}
      </S.Field>
      <Button type="submit" css={{ marginRight: "auto" }}>
        Enviar
        <ArrowRight />
      </Button>
    </S.Form>
  );
}
