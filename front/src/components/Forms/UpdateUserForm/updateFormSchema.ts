import { z } from "zod";

export const updateFormSchema = z.object({
  avatar: z.string().max(350).optional(),
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string().email("Forneça um e-mail válido"),
  phone: z.string().min(1, "O contato é obrigatório").max(15),
  // password: z
  //   .string()
  //   .min(1, "A senha é obrigatória")
  //   .min(8, "É necessário pelo menos oito caracteres")
  //   .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula")
  //   .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúsucula")
  //   .regex(/[0-9]+/, "É necessário pelo menos um número")
  //   .regex(
  //     /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/]/,
  //     "É necessário ter pelo menos um caracter especial"
  //   )
  //   .optional(),
  // confirmPassword: z
  //   .string()
  //   .min(1, "É obrigatório confirmar a senha")
  //   .optional(),
});
// .refine(({ password, confirmPassword }) => password === confirmPassword, {
//   message: "As senhas não correspondem",
//   path: ["confirmPassword"],
// });

// export interface IUpdateFormValues {
//   avatar?: string;
//   name?: string;
//   email?: string;
//   password?: string;
//   phone?: string;
// }

export type IUpdateFormValues = z.infer<typeof updateFormSchema>;
