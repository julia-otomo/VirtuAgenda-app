import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { ContactContext } from "../../contexts/contactContext";

export const ContactContainer = () => {
  const {
    contacts,
    createModal,
    setCreateModal,
    updateModal,
    setUpdateModal,
    deleteModal,
    setDeleteModal,
  } = useContext(ContactContext);
  return (
    <div className="w-4/5 p-4 border-box mt-5 bg-slate-400">
      <div>
        <input type="text" />
        <button>
          <FaSearch />
        </button>
      </div>
      <button>Novo Contato</button>
      <div>
        <h2>Contatos</h2>
        <ul></ul>
      </div>
    </div>
  );
};
