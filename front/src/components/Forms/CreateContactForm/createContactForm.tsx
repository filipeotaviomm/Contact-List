import { ImSpinner3 } from "react-icons/im";
import { Input } from "../Input/input";
import { Form } from "./styles";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ICreateContactFormValues,
  createContactFormSchema,
} from "./createContactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "../Select/select";
import { Button } from "../../../styles/ButtonStyles";
import { useContactContext } from "../../../hooks/useContactContext";

const CreateContactForm = () => {
  const { createContact } = useContactContext();

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICreateContactFormValues>({
    resolver: zodResolver(createContactFormSchema),
  });
  const create = (formData: ICreateContactFormValues) => {
    createContact(formData, setLoading, reset);
  };
  return (
    <Form onSubmit={handleSubmit(create)}>
      <Input
        label="Nome"
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
      <Input
        label="Telefone"
        type="text"
        id="phone"
        placeholder="Digite seu telefone"
        {...register("phone")}
        error={errors.phone}
        disabled={loading}
      />
      <Select
        label="Categoria"
        id="category"
        {...register("category")}
        error={errors.category}
        disabled={loading}
      />
      <Button type="submit" disabled={loading}>
        {loading ? <ImSpinner3 /> : "Criar"}
      </Button>
    </Form>
  );
};

export default CreateContactForm;
