import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";

export const DeleteUserDetailModal = () => {
  const { deleteUserDetails, setDeleteUserDetailModal, userDetail } =
    useContext(UserContext);

  const deleteFunction = async () => {
    await deleteUserDetails(userDetail!.contactTitle);
    setDeleteUserDetailModal(false);
  };

  return (
    <div>
      <div>
        <h2>{`Tem certeza que deseja excluir essa informação ?`}</h2>
        <div>
          <button onClick={deleteFunction}>Excluir</button>
          <button onClick={() => setDeleteUserDetailModal(false)}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
