import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../Input/input";
import { TNewContact, schemaNewContact } from "./validator";
import { useContext } from "react";
import { ContactContext } from "../../../contexts/contactContext";
import { TContactRequest } from "../../../contexts/contactContext/@types";
import { motion } from "framer-motion";

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
    <div className="fixed top-0 w-screen h-screen z-30 bg-stone-400 bg-opacity-50 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-4/5 max-w-[400px] bg-stone-100 py-6 px-4 border-box rounded-3xl flex flex-col gap-6 items-center"
      >
        <h2 className="font-medium text-xl text-lime-800">Novo Contato</h2>
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
            placeholder="Digite o nome do contato"
          />
          <Input
            type="email"
            id="email"
            title="Email"
            errorMessage={errors.email}
            {...register("email")}
            placeholder="Digite o email do contato"
          />
          <Input
            type="text"
            id="image"
            title="Foto do Contato"
            errorMessage={errors.image}
            {...register("image")}
            placeholder="Cole a url da foto de perfil do contato"
          />
          <Input
            type="text"
            id="phone"
            title="Número do telefone"
            errorMessage={errors.phone}
            {...register("phone")}
            placeholder="Digite o número de telefone do contato"
          />

          <div className="flex flex-col items-center gap-3 w-full">
            <button
              type="submit"
              className="py-2 px-4 w-full border-box bg-lime-700 rounded-3xl mt-2 text-stone-100 hover:bg-lime-900 transition duration-0 hover:duration-300 cursor-pointer text-center"
            >
              Salvar
            </button>

            <button
              onClick={() => setCreateModal(false)}
              className="py-2 px-4 w-full border-box bg-amber-700 rounded-3xl mt-2 text-stone-100 hover:bg-amber-900 transition duration-0 hover:duration-300 cursor-pointer text-center"
            >
              Cancelar
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
