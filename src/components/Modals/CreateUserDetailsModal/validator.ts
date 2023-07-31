import { z } from "zod";

export const schemaNewUserDetail = z.object({
  email: z.string().email("Deve ser um e-mail"),
  phone: z.string().max(12, "O máximo de caracteres é 12"),
  contactTitle: z.string().nonempty("Campo Obrigatório"),
});

export type TNewUserDetail = z.infer<typeof schemaNewUserDetail>;
