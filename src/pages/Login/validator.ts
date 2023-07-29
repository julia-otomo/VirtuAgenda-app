import { z } from "zod";

export const schema = z.object({
  email: z.string().nonempty("Campo obrigatório").email("Deve ser um e-mail"),
  password: z.string().nonempty("Campo obrigatório"),
});

export type TLoginData = z.infer<typeof schema>;
