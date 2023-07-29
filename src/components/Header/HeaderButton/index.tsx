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
  return <button onClick={() => headerFunction(id)}>{title}</button>;
};
