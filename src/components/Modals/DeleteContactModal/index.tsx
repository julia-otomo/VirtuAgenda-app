import { useContext } from "react";
import { ContactContext } from "../../../contexts/contactContext";

export const DeleteContactModal = () => {
  const { setDeleteModal, deleteContact, contact } = useContext(ContactContext);

  const deleteFunction = async () => {
    await deleteContact(contact!.email);
    setDeleteModal(false);
  };

  return (
    <div>
      <div>
        <h2>{`Tem certeza que deseja excluir o contato de ${
          contact!.name
        } ?`}</h2>
        <div>
          <button onClick={deleteFunction}>Excluir</button>
          <button onClick={() => setDeleteModal(false)}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};
