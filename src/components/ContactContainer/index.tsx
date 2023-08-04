import { SyntheticEvent, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { ContactContext } from "../../contexts/contactContext";
import { ContactCard } from "./ContactCard";

export const ContactContainer = () => {
  const {
    contacts,
    setCreateModal,
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
    <div className="w-4/5 min-h-screen  p-4 border-box mt-5 flex flex-col items-center gap-8">
      <div className="flex flex-row items-center relative max-w-xs lg:self-end">
        <input
          type="text"
          className="w-full py-1 px-4 border-box rounded-sm outline-none text-stone-800 border-2 border-transparent focus:border-2 focus:border-lime-800"
          value={input}
          onChange={(event) => setInput(event.currentTarget.value)}
          placeholder="Pesquise pelo contato..."
        />
        <button
          className="absolute right-2 hover:scale-125"
          onClick={buttonSubmit}
        >
          <FaSearch className="fill-lime-900" />
        </button>
      </div>
      {filteredContacts.length > 0 ? (
        <button
          onClick={clearFilteredList}
          className="py-2 px-4 border-box bg-amber-600 rounded-xl text-sm text-stone-100 hover:bg-amber-800 transition duration-0 hover:duration-300 cursor-pointer lg:self-end"
        >
          Voltar
        </button>
      ) : null}
      <button
        onClick={() => setCreateModal(true)}
        className="self-end py-2 px-4 border-box bg-lime-700 rounded-xl text-sm text-stone-100 hover:bg-lime-900 transition duration-0 hover:duration-300 cursor-pointer "
      >
        Novo Contato
      </button>
      <div className="flex flex-col items-center bg-[url('./assets/wallpaper1.jpg')] w-full bg-opacity-20  rounded-3xl lg:min-h-[600px] lg:max-h-[700px]">
        <div className="flex flex-col gap-8 items-center w-full bg-stone-100 bg-opacity-70 p-4 border-box lg:p-10 lg:min-h-[600px] lg:max-h-[700px] lg:gap-11">
          <h2 className="text-xl font-medium text-stone-800 underline decoration-stone-800 self-start">
            Contatos
          </h2>
          {contacts.length === 0 ? (
            <h2 className="lg:text-3xl text-lg text-stone-800 lg:mt-[18%]">
              Nenhum contato foi adicionado
            </h2>
          ) : (
            <ul className="flex flex-col items-center flex-wrap gap-8 lg:flex-row w-full">
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
      </div>
    </div>
  );
};
