import React, { useState } from "react";
import { Form } from "./styles";
import { Input } from "../Input/input";
import { useForm } from "react-hook-form";
import { InputPassword } from "../InputPassword/inputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { ImSpinner3 } from "react-icons/im";
import { ILoginFormValues } from "@/types/types";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginFormValues>({ resolver: zodResolver(loginFormSchema) });

  const login = () => {};

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
      <button type="submit" disabled={loading}>
        {loading ? <ImSpinner3 /> : "Entrar"}
      </button>
    </Form>
  );
};

export { LoginForm };
