import { useContext } from "react";
import { ContactContext } from "../../../contexts/contactContext";
import { UserContext } from "../../../contexts/userContext";

interface iHeaderButtonProps {
  title: string;
  id: string;
}

export const HeaderButton = ({ title, id }: iHeaderButtonProps) => {
  const { setHeaderTitle } = useContext(ContactContext);
  const { setMenu } = useContext(UserContext);
  const headerFunction = (id: string) => {
    setHeaderTitle(id);
    setMenu(false);
  };
  return (
    <button
      onClick={() => headerFunction(id)}
      className="text-stone-100 p-4 box-border hover:bg-lime-800 w-full transition duration-0 hover:duration-300 cursor-pointer lg:hover:bg-lime-500 lg:hover:duration-300 lg:hover:rounded-2xl lg:w-[100px]"
    >
      {title}
    </button>
  );
};
