import { z } from "zod";

export const createContactFormSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string().nullable().or(z.string().email().max(50)),
  phone: z
    .string()
    .min(1, "O contato é obrigatório")
    .max(15)
    .or(z.number().min(1, "O contato é obrigatório").max(15)),
  category: z.string(),
  isFavorite: z.boolean().optional(),
});

export type ICreateContactFormValues = z.infer<typeof createContactFormSchema>;
