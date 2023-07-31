import { SyntheticEvent, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { ContactContext } from "../../contexts/contactContext";
import { CreateContactModal } from "../Modals/CreateContact";
import { ContactCard } from "./ContactCard";
import { UpdateContactModal } from "../Modals/UpdateContactModal";
import { DeleteContactModal } from "../Modals/DeleteContactModal";

export const ContactContainer = () => {
  const {
    contacts,
    createModal,
    setCreateModal,
    updateModal,
    deleteModal,
    contactsToRender,
    input,
    setInput,
    filterContactsByInput,
    filteredContacts,
    clearFilteredList,
  } = useContext(ContactContext);

  const buttonSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    filterContactsByInput();
  };
  return (
    <div className="w-4/5 p-4 border-box mt-5 bg-slate-400">
      <div className="flex flex-row items-center relative max-w-xs">
        <input
          type="text"
          className="w-full  p-1 border-box"
          value={input}
          onChange={(event) => setInput(event.currentTarget.value)}
        />
        <button className="absolute right-2" onClick={buttonSubmit}>
          <FaSearch />
        </button>
      </div>
      {filteredContacts.length > 0 ? (
        <button onClick={clearFilteredList}>Voltar</button>
      ) : null}
      <button onClick={() => setCreateModal(true)}>Novo Contato</button>
      <div>
        <h2>Contatos</h2>
        {contacts.length === 0 ? (
          <h2>Nenhum contato foi adicionado</h2>
        ) : (
          <ul>
            {contactsToRender.map((contact) => (
              <ContactCard
                id={contact.id}
                image={contact.image}
                name={contact.name}
                email={contact.email}
                phone={contact.phone}
                key={contact.id}
              />
            ))}
          </ul>
        )}
      </div>
      {createModal ? <CreateContactModal /> : null}
      {updateModal ? <UpdateContactModal /> : null}
      {deleteModal ? <DeleteContactModal /> : null}
    </div>
  );
};
