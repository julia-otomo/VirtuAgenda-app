import { useForm } from "react-hook-form";
import { TLoginData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { iUserLogin } from "../../contexts/userContext/@types";
import { Input } from "../../components/Input/input";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginData>({
    resolver: zodResolver(schema),
  });
  const { userLogin } = useContext(UserContext);
  const onSubmitForm = async (data: iUserLogin) => {
    await userLogin(data);
  };
  return (
    <div className="w-screen h-screen bg-red-100 flex flex-col items-center justify-center">
      <div className="w-4/5 flex flex-col items-center bg-blue-400">
        <div className="flex flex-col items-center gap-8 p-4 border-box">
          <h1>VirtuAgenda</h1>
          <p>Seja bem vindo(a) à sua agenda virtual !</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="flex flex-col items-center gap-8 w-full p-4 border-box  bg-slate-400"
        >
          <h2>Login</h2>
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
          <button type="submit">Entrar</button>
          <p>OU</p>
          <Link to={"/register"}>Cadastre-se</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
