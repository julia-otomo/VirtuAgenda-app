import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../Input/input";
import { useContext } from "react";
import { TUpdateUser, schemaUpdateUser } from "./validator";
import { UserContext } from "../../../contexts/userContext";

export const UpdateUserModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUpdateUser>({
    resolver: zodResolver(schemaUpdateUser),
  });

  const { setEditUserModal, updateUser } = useContext(UserContext);

  const onSubmitForm = async (data: TUpdateUser) => {
    const cleanedData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );

    await updateUser(cleanedData);
    setEditUserModal(false);
  };
  return (
    <div className="fixed top-0 w-screen h-screen z-30 bg-stone-400 bg-opacity-50 flex flex-col items-center justify-center">
      <div className="w-4/5 max-w-[400px] bg-stone-100 py-10 px-4 border-box rounded-3xl flex flex-col gap-6 items-center relative">
        <button
          onClick={() => setEditUserModal(false)}
          className="absolute right-[5%] top-[2%] px-1 border-box hover:bg-stone-300 rounded-full"
        >
          X
        </button>
        <h2 className="font-medium text-xl text-lime-800 text-center">
          Atualizar Informações de perfil
        </h2>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="flex flex-col items-center gap-8"
        >
          <Input
            type="text"
            id="name"
            title="Nome"
            errorMessage={errors.name}
            {...register("name")}
            placeholder="Digite novo nome"
          />
          <Input
            type="text"
            id="image"
            title="Foto de Perfil"
            errorMessage={errors.image}
            {...register("image")}
            placeholder="Cole uma nova url"
          />
          <Input
            type="text"
            id="passsword"
            title="Senha"
            errorMessage={errors.password}
            {...register("password")}
            placeholder="Digite nova senha"
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
