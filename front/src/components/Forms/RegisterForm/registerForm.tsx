import { Input } from "../Input/input";
import { useForm } from "react-hook-form";
import { InputPassword } from "../InputPassword/inputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImSpinner3 } from "react-icons/im";
import { IRegisterFormValues, registerFormSchema } from "./registerFormSchema";
import { Form } from "./styles";
import { useState } from "react";
import { useUserContext } from "../../../hooks/useUserContext";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { userRegister } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  });
  const registration = (formData: IRegisterFormValues) => {
    userRegister(formData, setLoading, reset);
  };

  return (
    <Form onSubmit={handleSubmit(registration)}>
      <Input
        label="Nome Completo"
        type="text"
        id="name"
        placeholder="Digite seu nome"
        {...register("name")}
        error={errors.name}
        disabled={loading}
      />
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
      <InputPassword
        label="Confirmar Senha"
        id="confirmPassword"
        placeholder="Digite novamente sua senha"
        {...register("confirmPassword")}
        error={errors.confirmPassword}
        disabled={loading}
      />
      <Input
        label="Url da sua Foto"
        type="text"
        id="avatar"
        placeholder="Coloque a Url da sua foto"
        {...register("avatar")}
        error={errors.avatar}
        disabled={loading}
      />
      <Input
        label="Telefone"
        type="text"
        id="phone"
        placeholder="Digite seu telefone"
        {...register("phone")}
        error={errors.phone}
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? <ImSpinner3 /> : "Cadastrar"}
      </button>
    </Form>
  );
};

export { RegisterForm };
