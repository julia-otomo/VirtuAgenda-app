import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../Input/input";
import { useContext } from "react";
import { ContactContext } from "../../../contexts/contactContext";
import { TContactUpdate } from "../../../contexts/contactContext/@types";
import { TUpdateContact, schemaUpdateContact } from "./validator";

export const UpdateContactModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUpdateContact>({
    resolver: zodResolver(schemaUpdateContact),
  });

  const { updateContact, setUpdateModal, contact } = useContext(ContactContext);

  const onSubmitForm = async (data: TContactUpdate) => {
    const cleanedData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );

    await updateContact(cleanedData, contact!.email);
    setUpdateModal(false);
  };
  return (
    <div className="fixed z-10 w-screen h-screen">
      <div className="w-4/5">
        <button onClick={() => setUpdateModal(false)}>X</button>
        <h2>Atualizar Contato</h2>
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
