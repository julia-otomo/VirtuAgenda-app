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
    <div className="fixed top-0 w-screen h-screen z-30 bg-stone-400 bg-opacity-50 flex flex-col items-center justify-center">
      <div className="w-4/5 max-w-[400px] bg-stone-100 py-6 px-4 border-box rounded-3xl flex flex-col gap-6 items-center relative">
        <button
          onClick={() => setUpdateModal(false)}
          className="absolute right-[5%] px-1 border-box hover:bg-stone-300 rounded-full"
        >
          X
        </button>
        <h2 className="font-medium text-xl text-lime-800">Atualizar Contato</h2>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="flex flex-col items-center gap-8"
        >
          <Input
            type="text"
            id="name"
            title="Nome do Contato"
            errorMessage={errors.name}
            {...register("name")}
            placeholder="Digite novo nome de contato"
          />
          <Input
            type="email"
            id="email"
            title="Email"
            errorMessage={errors.email}
            {...register("email")}
            placeholder="Digite novo email de contato"
          />
          <Input
            type="text"
            id="image"
            title="Foto do Contato"
            errorMessage={errors.image}
            {...register("image")}
            placeholder="Cole uma nova url"
          />
          <Input
            type="text"
            id="phone"
            title="Número do telefone"
            errorMessage={errors.phone}
            {...register("phone")}
            placeholder="Digite novo telefone de contato"
          />
          <button
            type="submit"
            className="py-2 px-4 w-full border-box bg-lime-700 rounded-3xl mt-2 text-stone-100 hover:bg-lime-900 transition duration-0 hover:duration-300 cursor-pointer text-center"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};
