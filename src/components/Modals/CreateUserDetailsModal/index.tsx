import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../Input/input";
import { useContext } from "react";
import { TNewUserDetail, schemaNewUserDetail } from "./validator";
import { UserContext } from "../../../contexts/userContext";
import { iUserDetailsRequest } from "../../../contexts/userContext/@types";

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
      <div className="w-4/5 max-w-[400px] bg-stone-100 py-10 px-4 border-box rounded-3xl flex flex-col gap-6 items-center relative">
        <button
          onClick={() => setCreateUserDetailModal(false)}
          className="absolute right-[5%] top-[3%] px-1 border-box hover:bg-stone-300 rounded-full"
        >
          X
        </button>
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
