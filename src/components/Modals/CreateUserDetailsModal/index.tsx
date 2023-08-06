import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../Input/input";
import { useContext } from "react";
import { TNewUserDetail, schemaNewUserDetail } from "./validator";
import { UserContext } from "../../../contexts/userContext";
import { iUserDetailsRequest } from "../../../contexts/userContext/@types";
import { motion } from "framer-motion";

export const CreateUserDetailModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNewUserDetail>({
    resolver: zodResolver(schemaNewUserDetail),
  });

  const { createUserDetails, setCreateUserDetailModal } =
    useContext(UserContext);

  const onSubmitForm = async (data: iUserDetailsRequest) => {
    await createUserDetails(data);
    setCreateUserDetailModal(false);
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
        className="w-4/5 max-w-[400px] bg-stone-100 py-10 px-4 border-box rounded-3xl flex flex-col gap-6 items-center "
      >
        <h2 className="font-medium text-xl text-lime-800 text-center">
          Nova Informação de Contato
        </h2>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="flex flex-col items-center gap-8"
        >
          <Input
            type="text"
            id="contactTitle"
            title="Título do Contato"
            errorMessage={errors.contactTitle}
            {...register("contactTitle")}
            placeholder="Digite o título de contato"
          />
          <Input
            type="email"
            id="email"
            title="Email"
            errorMessage={errors.email}
            {...register("email")}
            placeholder="Digite seu novo email"
          />
          <Input
            type="text"
            id="phone"
            title="Número do telefone"
            errorMessage={errors.phone}
            {...register("phone")}
            placeholder="Digite seu novo telefone"
          />
          <div className="flex flex-col items-center gap-3 w-full">
            <button
              type="submit"
              className="py-2 px-4 w-full border-box bg-lime-700 rounded-3xl mt-2 text-stone-100 hover:bg-lime-900 transition duration-0 hover:duration-300 cursor-pointer text-center"
            >
              Salvar
            </button>

            <button
              onClick={() => setCreateUserDetailModal(false)}
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
