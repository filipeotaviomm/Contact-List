import { Form } from "./styles";
import { Input } from "../Input/input";
import { InputPassword } from "../InputPassword/inputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { ILoginFormValues, loginFormSchema } from "./loginFormSchema";
import { ImSpinner3 } from "react-icons/im";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../../hooks/useUserContext";
import { Button } from "../../../styles/ButtonStyles";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginFormValues>({ resolver: zodResolver(loginFormSchema) });

  const login = (formData: ILoginFormValues) => {
    userLogin(formData, setLoading, reset);
  };

  return (
    <Form onSubmit={handleSubmit(login)}>
      <Input
        label="E-mail"
        type="email"
        id="email"
        placeholder="Digite seu e-mail"
        {...register("email")}
        error={errors.email}
        disabled={loading}
      />
      <InputPassword
        label="Senha"
        id="password"
        placeholder="Digite sua senha"
        {...register("password")}
        error={errors.password}
        disabled={loading}
      />
      <Button type="submit" disabled={loading}>
        {loading ? <ImSpinner3 /> : "Entrar"}
      </Button>
    </Form>
  );
};

export { LoginForm };
