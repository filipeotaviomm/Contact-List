import { Input } from "../Input/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImSpinner3 } from "react-icons/im";
import { Form } from "./styles";
import { useState } from "react";
import { Button } from "../../../styles/ButtonStyles";
import { IUpdateFormValues, updateFormSchema } from "./updateFormSchema";
import { useContactContext } from "../../../hooks/useContactContext";
import { Select } from "../Select/select";

const UpdateContactForm = () => {
  const [loading, setLoading] = useState(false);

  const { editingContact, updateContact } = useContactContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateFormValues>({
    resolver: zodResolver(updateFormSchema),
    values: {
      name: editingContact.name,
      email: editingContact.email,
      phone: editingContact.phone,
      category: editingContact.category,
    },
  });
  const update = (formData: IUpdateFormValues) => {
    updateContact(formData, setLoading);
  };

  return (
    <Form onSubmit={handleSubmit(update)}>
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
        placeholder="Digite o e-mail"
        {...register("email")}
        error={errors.email}
        disabled={loading}
      />
      <Input
        label="Telefone"
        type="text"
        id="phone"
        placeholder="Digite o telefone"
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
        {loading ? <ImSpinner3 /> : "Editar"}
      </Button>
    </Form>
  );
};

export { UpdateContactForm };
