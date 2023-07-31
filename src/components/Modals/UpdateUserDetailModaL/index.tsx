import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../Input/input";
import { useContext } from "react";
import { TUpdateUserDetail, schemaUpdateUserDetail } from "./validator";
import { UserContext } from "../../../contexts/userContext";
import { TUserDetailsPartialUpdate } from "../../../contexts/userContext/@types";

export const UpdateUserDetailModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUpdateUserDetail>({
    resolver: zodResolver(schemaUpdateUserDetail),
  });

  const { userDetail, updateUserDetails, setEditUserDetailModal } =
    useContext(UserContext);

  const onSubmitForm = async (data: TUserDetailsPartialUpdate) => {
    const cleanedData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );

    await updateUserDetails(cleanedData, userDetail!.contactTitle);
    setEditUserDetailModal(false);
  };
  return (
    <div className="fixed z-10 w-screen h-screen">
      <div className="w-4/5">
        <button onClick={() => setEditUserDetailModal(false)}>X</button>
        <h2>Atualizar Contato</h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Input
            type="email"
            id="email"
            title="Email"
            errorMessage={errors.email}
            {...register("email")}
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
