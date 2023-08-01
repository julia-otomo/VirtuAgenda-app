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
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[url('./assets/wallpaper1.jpg')] bg-cover bg-no-repeat">
      <div className=" bg-stone-100 bg-opacity-80 w-4/5 max-h-fit flex flex-col items-center justify-center gap-8 py-8 px-4 border-box rounded-3xl overflow-hidden">
        <h2 className="text-2xl font-semibold text-lime-800">VirtuAgenda</h2>

        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="flex flex-col gap-6 items-center max-h-fit  overflow-y-auto  w-11/12"
        >
          <h2 className="text-xl font-medium text-stone-800 mb-2 underline decoration-stone-800">
            Cadastro
          </h2>
          <Input
            type="text"
            id="name"
            title="Nome Completo*"
            errorMessage={errors.name}
            {...register("name")}
            placeholder="Digite seu nome"
          />
          <Input
            type="email"
            id="email"
            title="Email*"
            errorMessage={errors.email}
            {...register("email")}
            placeholder="Digite seu email"
          />
          <Input
            type="password"
            id="password"
            title="Senha*"
            errorMessage={errors.password}
            {...register("password")}
            placeholder="Define sua senha"
          />
          <Input
            type="password"
            id="confirmPassword"
            title="Confirmar Senha*"
            errorMessage={errors.confirmPassword}
            {...register("confirmPassword")}
            placeholder="Confirme sua senha"
          />
          <Input
            type="text"
            id="image"
            title="Foto de Perfil*"
            errorMessage={errors.image}
            {...register("image")}
            placeholder="Cole a url de uma imagem"
          />
          <Input
            type="text"
            id="phone"
            title="Número do telefone*"
            errorMessage={errors.phone}
            {...register("phone")}
            placeholder="Digite seu número de telefone"
          />
          <button
            type="submit"
            className="py-2 px-4 w-full border-box bg-lime-700 rounded-3xl mt-2 text-stone-100 hover:bg-lime-900 transition duration-0 hover:duration-300 cursor-pointer"
          >
            Cadastrar
          </button>
        </form>
        <Link
          to={"/"}
          className="cursor-pointer text-stone-800 focus:text-lime-800"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default SignPage;
