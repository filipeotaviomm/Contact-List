import { z } from "zod";

export const createContactFormSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("Forneça um e-mail válido"),
  phone: z
    .string()
    .min(1, "O contato é obrigatório")
    .max(15)
    .or(z.number().min(1, "O contato é obrigatório").max(15)),
  category: z.string(),
});

export type ICreateContactFormValues = z.infer<typeof createContactFormSchema>;
