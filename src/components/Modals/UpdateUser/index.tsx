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
    <div className="fixed z-10 w-screen h-screen">
      <div className="w-4/5">
        <button onClick={() => setEditUserModal(false)}>X</button>
        <h2>Atualizar Informações de perfil</h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Input
            type="text"
            id="name"
            title="Nome"
            errorMessage={errors.name}
            {...register("name")}
          />
          <Input
            type="text"
            id="image"
            title="Foto de Perfil"
            errorMessage={errors.image}
            {...register("image")}
          />
          <Input
            type="text"
            id="passsword"
            title="Senha"
            errorMessage={errors.password}
            {...register("password")}
          />
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};
