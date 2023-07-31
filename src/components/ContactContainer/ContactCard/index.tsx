import { useContext } from "react";
import { ContactContext } from "../../../contexts/contactContext";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

interface iCardProps {
  id: string;
  image: string;
  name: string;
  email: string;
  phone: string;
}

export const ContactCard = ({ id, image, name, email, phone }: iCardProps) => {
  const { setUpdateModal, setDeleteModal, setContactById } =
    useContext(ContactContext);

  const updateFunction = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setUpdateModal(true);
    setContactById(event);
  };

  const deleteFunction = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setDeleteModal(true);
    setContactById(event);
  };

  return (
    <li id={id} key={id}>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>{`Email: ${email}`}</p>
      <p>{`Telefone: ${phone}`}</p>
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
