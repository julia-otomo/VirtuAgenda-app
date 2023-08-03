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
    <li
      id={id}
      key={id}
      className="bg-stone-50 p-4 border-box rounded-xl flex flex-col gap-2 w-full max-w-[300px]"
    >
      <img src={image} alt="" className="w-full self-center rounded-lg" />
      <h3 className="text-[1.1rem] font-medium text-lime-800">{name}</h3>
      <a
        href={`mailto:${email}`}
        className="text-[.90rem] text-stone-800 hover:text-amber-800"
      >{`Email: ${email}`}</a>
      <a
        href={`tel:+${phone}`}
        className="text-[.90rem] text-stone-800 hover:text-amber-800"
      >{`Telefone: ${phone}`}</a>
      <div className="flex flex-row gap-2 justify-end mt-2">
        <button id={id} onClick={(event) => updateFunction(event)}>
          <FiEdit className=" stroke-lime-800 hover:scale-125" />
        </button>
        <button id={id} onClick={(event) => deleteFunction(event)}>
          <MdDelete className="fill-lime-800 hover:scale-125" />
        </button>
      </div>
    </li>
  );
};
