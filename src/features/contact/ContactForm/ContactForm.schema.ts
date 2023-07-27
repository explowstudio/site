import { z } from "zod";

const REQUIRED_ERROR = "Campo obrigatório.";

export const SendContactResolver = z.object(
  {
    name: z.string(),
    email: z.string().email({
      message: "Formato de e-mail inválido.",
    }),
    company: z.string(),
    phoneNumber: z.string(),
    content: z.string().max(1000, {
      message: "O limite nesse campo é de 1000 caracteres.",
    }),
    amount: z.string(),
    scope: z.string().array().min(1, {
      message: REQUIRED_ERROR,
    }),
    deadline: z.string(),
  },
  {
    required_error: REQUIRED_ERROR,
  },
);
