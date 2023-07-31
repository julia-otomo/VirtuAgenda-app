import { z } from "zod";

export const schemaUpdateContact = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  image: z.string().optional(),
  phone: z.string().max(12, "O máximo de caracteres é 12").optional(),
});

export type TUpdateContact = z.infer<typeof schemaUpdateContact>;
