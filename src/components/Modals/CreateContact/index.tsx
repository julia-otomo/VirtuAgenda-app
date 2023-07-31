import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../Input/input";
import { TNewContact, schemaNewContact } from "./validator";
import { useContext } from "react";
import { ContactContext } from "../../../contexts/contactContext";
import { TContactRequest } from "../../../contexts/contactContext/@types";

export const CreateContactModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNewContact>({
    resolver: zodResolver(schemaNewContact),
  });

  const { createContact, setCreateModal } = useContext(ContactContext);

  const onSubmitForm = async (data: TContactRequest) => {
    await createContact(data);
    setCreateModal(false);
  };
  return (
    <div className="fixed z-10 w-screen h-screen">
      <div className="w-4/5">
        <button onClick={() => setCreateModal(false)}>X</button>
        <h2>Novo Contato</h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Input
            type="text"
            id="name"
            title="Nome do Contato"
            errorMessage={errors.name}
            {...register("name")}
          />
          <Input
            type="email"
            id="email"
            title="Email"
            errorMessage={errors.email}
            {...register("email")}
          />
          <Input
            type="text"
            id="image"
            title="Foto do Contato"
            errorMessage={errors.image}
            {...register("image")}
          />
          <Input
            type="text"
            id="phone"
            title="Número do telefone"
            errorMessage={errors.phone}
            {...register("phone")}
          />
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};
