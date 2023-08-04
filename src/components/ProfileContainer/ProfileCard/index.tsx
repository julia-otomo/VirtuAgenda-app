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
    <div
      id={id}
      className="bg-gradient-to-t from-lime-200 via-amber-200 to-amber-900  flex flex-col rounded-3xl items-center justify-center min-h-[250px] max-w-[400px] lg:min-h-[300px] "
    >
      <div className=" w-[93%] min-h-[220px] bg-stone-50 flex flex-col rounded-3xl gap-5 p-4 border-box relative lg:min-h-[280px]">
        <h2 className="self-center text-center font-medium text-amber-900 lg:text-xl">
          {contactTitle}
        </h2>
        {email ? (
          <p className="text-sm text-amber-900 lg:text-base ">{`Email: ${email}`}</p>
        ) : null}
        {phone ? (
          <p className="text-sm text-amber-900 lg:text-base">{`Telefone: ${phone}`}</p>
        ) : null}
        <div className="flex flex-row gap-2 justify-end mt-2 absolute bottom-[10%] right-[10%]">
          <button id={id} onClick={(event) => updateFunction(event)}>
            <FiEdit className=" stroke-lime-800 hover:scale-125 lg:min-w-[25px] lg:min-h-[25px]" />
          </button>
          <button id={id} onClick={(event) => deleteFunction(event)}>
            <MdDelete className="fill-amber-800 hover:scale-125 lg:min-w-[25px] lg:min-h-[25px]" />
          </button>
        </div>
      </div>
    </div>
  );
};
