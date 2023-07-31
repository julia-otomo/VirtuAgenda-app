import { z } from "zod";

export const schemaUpdateUser = z.object({
  name: z.string().optional(),
  image: z.string().optional(),
  password: z.string().optional(),
});

export type TUpdateUser = z.infer<typeof schemaUpdateUser>;
