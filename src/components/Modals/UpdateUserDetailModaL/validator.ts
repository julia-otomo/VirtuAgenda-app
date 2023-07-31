import { z } from "zod";

export const schemaUpdateUserDetail = z.object({
  email: z.string().optional(),
  phone: z.string().max(12, "O máximo de caracteres é 12").optional(),
});

export type TUpdateUserDetail = z.infer<typeof schemaUpdateUserDetail>;
