import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/input";
import { TRegisterData, schemaRegister } from "./validator";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Link } from "react-router-dom";
import { iUserRequestInformation } from "../../contexts/userContext/@types";

const SignPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterData>({
    resolver: zodResolver(schemaRegister),
  });

  const { userRegister } = useContext(UserContext);

  const onSubmitForm = async (data: iUserRequestInformation) => {
    await userRegister(data);
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-slate-500">
      <div className="w-4/5 flex flex-col items-center justify-center gap-8">
        <h2>VirtuAgenda</h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <h2>Cadastro</h2>
          <Input
            type="text"
            id="name"
            title="Nome Completo"
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
            type="password"
            id="password"
            title="Senha"
            errorMessage={errors.password}
            {...register("password")}
          />
          <Input
            type="password"
            id="confirmPassword"
            title="Confirmar Senha"
            errorMessage={errors.confirmPassword}
            {...register("confirmPassword")}
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
            id="phone"
            title="Número do telefone"
            errorMessage={errors.phone}
            {...register("phone")}
          />
          <button type="submit">Cadastrar</button>
        </form>
        <Link to={"/"}>Voltar</Link>
      </div>
    </div>
  );
};

export default SignPage;
