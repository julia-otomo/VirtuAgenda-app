import { createContext, useEffect, useState } from "react";
import {
  TContactRequest,
  TContactUpdate,
  iContactContextProps,
  iContactInformation,
  iContactProviderProps,
} from "./@types";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const ContactContext = createContext({} as iContactContextProps);

export const ContactProvider = ({ children }: iContactProviderProps) => {
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("contacts");
  const [contacts, setContacts] = useState<iContactInformation[]>([]);
  const [contact, setContact] = useState<iContactInformation | null>(null);
  const [filteredContacts, setFilteredContacts] = useState<
    iContactInformation[]
  >([]);
  const [input, setInput] = useState("");
  const contactsToRender =
    filteredContacts.length > 0 ? filteredContacts : contacts;

  const filterContactsByInput = () => {
    if (input !== "") {
      const filterContacts = contacts.filter(
        (cont) =>
          cont.name.toLowerCase().includes(input.toLowerCase()) ||
          cont.email.toLowerCase().includes(input.toLowerCase()) ||
          cont.phone.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredContacts(filterContacts);
    } else {
      setFilteredContacts([]);
    }
  };

  const clearFilteredList = () => {
    setInput("");
    setFilteredContacts([]);
  };

  useEffect(() => {
    const token = localStorage.getItem("@Token");
    const userId = localStorage.getItem("@UserId");

    if (token) {
      const getAllContacts = async () => {
        try {
          const contacts = await api.get(`/contacts/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setContacts(contacts.data);
        } catch (error) {
          console.log(error);
        }
      };

      getAllContacts();
    }
  }, []);

  const setContactById = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const contactId = event.currentTarget.id;
    const contactFound = contacts.find((cont) => cont.id == contactId);
    setContact(contactFound!);
  };

  const createContact = async (data: TContactRequest) => {
    const token = localStorage.getItem("@Token");
    const userId = localStorage.getItem("@UserId");

    try {
      const contact = await api.post(`/contacts/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setContacts([...contacts, contact.data]);
      toast.success("Contato adicionado com sucesso !");
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível adicionar um novo contato");
    }
  };

  const updateContact = async (data: TContactUpdate, email: string) => {
    const token = localStorage.getItem("@Token");
    const userId = localStorage.getItem("@UserId");

    try {
      const contact = await api.patch(`/contacts/${userId}/${email}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const updatedContacts: iContactInformation[] = contacts.map((cont) => {
        if (contact.data.email.toLowerCase() == cont.email.toLowerCase()) {
          return { ...cont, ...data };
        } else {
          return { ...cont };
        }
      });

      setContacts(updatedContacts);
      toast.success("Contato atualizado com sucesso !");
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível atualizar um contato");
    }
  };

  const deleteContact = async (email: string) => {
    const token = localStorage.getItem("@Token");
    const userId = localStorage.getItem("@UserId");

    try {
      await api.delete(`/contacts/${userId}/${email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const removeContact: iContactInformation[] = contacts.filter(
        (contact) => contact.email.toLocaleLowerCase() != email.toLowerCase()
      );

      setContacts(removeContact);

      toast.success("Contato removido com sucesso !");
    } catch (error) {
      console.log(error);
      toast.error("Nào foi possível excluir esse contato");
    }
  };

  return (
    <ContactContext.Provider
      value={{
        updateModal,
        setUpdateModal,
        deleteModal,
        setDeleteModal,
        createModal,
        setCreateModal,
        contacts,
        createContact,
        updateContact,
        deleteContact,
        headerTitle,
        setHeaderTitle,
        contact,
        setContact,
        setContactById,
        setInput,
        filteredContacts,
        filterContactsByInput,
        clearFilteredList,
        contactsToRender,
        input,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
