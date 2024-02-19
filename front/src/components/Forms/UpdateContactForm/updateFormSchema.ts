import { z } from "zod";

export const updateFormSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z
    .string()
    .nullable()
    .or(z.string().email("Forneça um e-mail válido").max(50)),
  phone: z.string().min(1, "O contato é obrigatório").max(15),
  category: z.string(),
  isFavorite: z.boolean().optional(),
});

export type IUpdateFormValues = z.infer<typeof updateFormSchema>;
