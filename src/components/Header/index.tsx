import { useContext } from "react";
import { HeaderButton } from "./HeaderButton";
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { UserContext } from "../../contexts/userContext";

export const Header = () => {
  const { menu, setMenu } = useContext(UserContext);
  return (
    <header className="bg-lime-800 h-16 top-0 fixed w-screen flex flex-col items-center z-20">
      <div className="w-4/5 h-full flex flex-row items-center justify-between p-4 border-box">
        <h1 className="text-stone-100 font-semibold text-lg">VirtuAgenda</h1>
        <div className=" hidden lg:flex lg:flex-row lg:gap-20 lg:h-full">
          <HeaderButton title="Contatos" id="contacts" />
          <HeaderButton title="Perfil" id="profile" />
        </div>
        <button onClick={() => setMenu(!menu)} className="block lg:hidden">
          {menu ? (
            <MdOutlineClose className="fill-stone-100 w-6 h-6" />
          ) : (
            <LuMenu className="fill-stone-100 stroke-stone-100 w-6 h-6" />
          )}
        </button>
      </div>
    </header>
  );
};
