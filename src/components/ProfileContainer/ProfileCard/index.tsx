import { useContext } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { UserContext } from "../../../contexts/userContext";

interface iProfileCardProps {
  id: string;
  email?: string | null;
  phone?: string | null;
  contactTitle: string;
}

export const ProfileCard = ({
  id,
  email,
  phone,
  contactTitle,
}: iProfileCardProps) => {
  const {
    setEditUserDetailModal,
    setDeleteUserDetailModal,
    setUserDetailtById,
  } = useContext(UserContext);

  const updateFunction = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setEditUserDetailModal(true);
    setUserDetailtById(event);
  };

  const deleteFunction = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setDeleteUserDetailModal(true);
    setUserDetailtById(event);
  };
  return (
    <li id={id}>
      <h2>{contactTitle}</h2>
      {email ? <p>{`Email: ${email}`}</p> : null}
      {phone ? <p>{`Telefone: ${phone}`}</p> : null}
      <div>
        <button id={id} onClick={(event) => updateFunction(event)}>
          <FiEdit />
        </button>
        <button id={id} onClick={(event) => deleteFunction(event)}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};
