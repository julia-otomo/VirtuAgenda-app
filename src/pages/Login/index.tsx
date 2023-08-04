import { useForm } from "react-hook-form";
import { TLoginData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { iUserLogin } from "../../contexts/userContext/@types";
import { Input } from "../../components/Input/input";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../../assets/undraw_mobile_user_re_xta4.svg";

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
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[url('./assets/wallpaper1.jpg')] bg-cover bg-no-repeat">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-4/5 flex flex-col items-center overflow-y-auto max-w-[1000px] lg:flex-row lg:h-[700px]"
      >
        <div className="flex flex-col items-center gap-24 border-box  bg-lime-800 rounded-t-3xl py-8 px-4 w-full lg:h-full lg:rounded-l-3xl lg:rounded-r-none lg:px-10">
          <h1 className="text-2xl font-semibold text-stone-100 lg:text-3xl">
            VirtuAgenda
          </h1>
          <p className="text-stone-100 text-center lg:text-xl">
            Seja bem vindo(a) à sua agenda virtual !
          </p>
          <img src={img} alt="" className=" w-3/4 max-w-[300px] " />
        </div>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="flex flex-col items-center gap-8 w-full py-8 px-4 border-box  bg-stone-100 bg-opacity-80 rounded-b-3xl lg:h-full lg:rounded-r-3xl lg:rounded-l-none lg:px-10 lg:gap-12"
        >
          <h2 className="text-xl font-medium text-stone-800 mb-2 underline decoration-stone-800 lg:text-2xl">
            Login
          </h2>
          <Input
            type="email"
            id="email"
            title="Email"
            errorMessage={errors.email}
            {...register("email")}
            placeholder="Digite seu email"
          />
          <Input
            type="password"
            id="password"
            title="Senha"
            errorMessage={errors.password}
            {...register("password")}
            placeholder="Digite sua senha"
          />
          <button
            type="submit"
            className="py-2 px-4 w-full border-box bg-lime-700 rounded-3xl mt-2 text-stone-100 hover:bg-lime-900 transition duration-0 hover:duration-300 cursor-pointer"
          >
            Entrar
          </button>
          <p className="text-stone-800">OU</p>
          <Link
            to={"/register"}
            className="py-2 px-4 w-full border-box bg-amber-700 rounded-3xl mt-2 text-stone-100 hover:bg-amber-900 transition duration-0 hover:duration-300 cursor-pointer text-center"
          >
            Cadastre-se
          </Link>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
