import { z } from "zod";

const REQUIRED_ERROR = "Campo obrigatório.";

export const SendContactResolver = z.object(
  {
    name: z.string().min(1, { message: REQUIRED_ERROR }),
    email: z.string().email({
      message: "Formato de e-mail inválido.",
    }),
    company: z.string().min(1, { message: REQUIRED_ERROR }),
    phoneNumber: z.string().min(1, { message: REQUIRED_ERROR }),
    content: z.string().min(1, { message: REQUIRED_ERROR }).max(1000, {
      message: "O limite nesse campo é de 1000 caracteres.",
    }),
    amount: z.string({
      invalid_type_error: REQUIRED_ERROR,
    }),
    scope: z.string().array().min(1, {
      message: REQUIRED_ERROR,
    }),
    deadline: z.string({
      invalid_type_error: REQUIRED_ERROR,
    }),
  },
  {
    required_error: REQUIRED_ERROR,
  },
);
