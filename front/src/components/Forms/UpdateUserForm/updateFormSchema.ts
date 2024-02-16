import { z } from "zod";

export const updateFormSchema = z
  .object({
    avatar: z.string().max(350).optional(),
    name: z.string().min(1, "O nome é obrigatório"),
    email: z
      .string()
      .min(1, "O e-mail é obrigatório")
      .email("Forneça um e-mail válido"),
    phone: z.string().min(1, "O contato é obrigatório").max(15),
    password: z.string().optional(),
    confirmPassword: z.string().optional(),
  })
  .refine(
    ({ password, confirmPassword }) => {
      if (password || confirmPassword) {
        const passwordsMatch = password === confirmPassword;

        // está atribuindo à password uma string vazia "" se ela for undefined
        password = password ?? "";
        confirmPassword = confirmPassword ?? "";

        if (!passwordsMatch) {
          return false;
        }

        const hasUpperCase = /[A-Z]+/.test(password);
        const hasLowerCase = /[a-z]+/.test(password);
        const hasNumber = /[0-9]+/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/]/.test(password);

        return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
      }
      return true;
    },
    {
      message:
        "As senhas não correspondem ou não atendem aos critérios de segurança",
      path: ["confirmPassword"],
    }
  );

export type IUpdateUserFormValues = z.infer<typeof updateFormSchema>;
