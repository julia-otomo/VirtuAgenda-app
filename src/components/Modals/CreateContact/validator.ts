import { z } from "zod";

export const schemaNewContact = z.object({
  name: z.string().nonempty("Campo Obrigatório"),
  email: z.string().nonempty("Campo obrigatório").email("Deve ser um e-mail"),
  image: z.string().nonempty("Campo obrigatório"),
  phone: z
    .string()
    .nonempty("Campo obrigatório")
    .max(12, "O máximo de caracteres é 12"),
});

export type TNewContact = z.infer<typeof schemaNewContact>;
