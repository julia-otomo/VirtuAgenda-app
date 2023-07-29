import { z } from "zod";

export const schemaRegister = z
  .object({
    name: z.string().nonempty("Campo Obrigatório"),
    email: z.string().nonempty("Campo obrigatório").email("Deve ser um e-mail"),
    password: z
      .string()
      .nonempty("Campo obrigatório")
      .min(8, "A senha deve conter no mínimo 8 caracteres")
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
        "A senha deve conter letras maiúsculas, minúsculas e números"
      ),
    confirmPassword: z.string().nonempty("Campo obrigatório"),
    image: z.string().nonempty("Campo obrigatório"),
    phone: z
      .string()
      .nonempty("Campo obrigatório")
      .max(12, "O máximo de caracteres é 12"),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "A confirmação da senha deve ser igual à senha",
    path: ["confirmPassword"],
  });

export type TRegisterData = z.infer<typeof schemaRegister>;
