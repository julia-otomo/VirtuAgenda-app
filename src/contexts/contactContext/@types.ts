export interface iContactProviderProps {
  children: React.ReactNode;
}

export interface iContactInformation {
  id: string;
  name: string;
  image: string;
  addedAt: string | Date;
  email: string;
  phone: string;
}

export type TContactRequest = Omit<iContactInformation, "id" | "addedAt">;

export type TContactUpdate = Partial<TContactRequest>;

export interface iContactContextProps {
  updateModal: boolean;
  setUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteModal: boolean;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  createModal: boolean;
  setCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  contacts: iContactInformation[];
  createContact: (data: TContactRequest) => Promise<void>;
  updateContact: (data: TContactUpdate, email: string) => Promise<void>;
  deleteContact: (email: string) => Promise<void>;
  headerTitle: string;
  setHeaderTitle: React.Dispatch<React.SetStateAction<string>>;
  contact: iContactInformation | null;
  setContact: React.Dispatch<React.SetStateAction<iContactInformation | null>>;
  setContactById: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  filteredContacts: iContactInformation[];
  contactsToRender: iContactInformation[];
  filterContactsByInput: () => void;
  clearFilteredList: () => void;
}
