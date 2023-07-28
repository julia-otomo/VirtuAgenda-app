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
}
