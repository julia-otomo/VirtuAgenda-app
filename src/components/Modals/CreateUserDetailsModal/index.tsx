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
    <div className="fixed z-10 w-screen h-screen">
      <div className="w-4/5">
        <button onClick={() => setCreateUserDetailModal(false)}>X</button>
        <h2>Nova Informação de Contato</h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Input
            type="text"
            id="contactTitle"
            title="Título do Contato"
            errorMessage={errors.contactTitle}
            {...register("contactTitle")}
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
