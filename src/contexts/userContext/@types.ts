export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUserResponseInformation {
  id: string;
  name: string;
  image: string;
  addedAt: string;
  details: iUserDetailsInformation[];
}

export interface iUserRequestInformation {
  name: string;
  image: string;
  password: string;
  email: string;
  phone: string;
}

export interface iUserUpdateInformation {
  name?: string;
  image?: string;
  password?: string;
}

export interface iUserDetailsInformation {
  id: string;
  email?: string | null;
  phone?: string | null;
  contactTitle: string;
}

export interface iUserLogin {
  email: string;
  password: string;
}

export interface iUserDetailsRequest {
  email?: string | null;
  phone?: string | null;
  contactTitle: string;
}

type TUserDetailsUpdate = Omit<iUserDetailsRequest, "contactTitle">;

export type TUserDetailsPartialUpdate = Partial<TUserDetailsUpdate>;

export interface iUserContextProps {
  user: iUserResponseInformation | null;
  editUserModal: boolean;
  setEditUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  userRegister: (data: iUserRequestInformation) => Promise<void>;
  userLogin: (data: iUserLogin) => Promise<void>;
  logout: () => void;
  updateUser: (data: iUserUpdateInformation) => Promise<void>;
  deleteUser: () => Promise<void>;
  createUserDetails: (data: iUserDetailsRequest) => Promise<void>;
  updateUserDetails: (
    data: TUserDetailsPartialUpdate,
    contactTitle: string
  ) => Promise<void>;
  deleteUserDetails: (contactTitle: string) => Promise<void>;
  createUserDetailModal: boolean;
  setCreateUserDetailModal: React.Dispatch<React.SetStateAction<boolean>>;
  editUserDetailModal: boolean;
  setEditUserDetailModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteUserDetailModal: boolean;
  setDeleteUserDetailModal: React.Dispatch<React.SetStateAction<boolean>>;
  userDetail: iUserDetailsInformation | null;
  setUserDetail: React.Dispatch<
    React.SetStateAction<iUserDetailsInformation | null>
  >;
  setUserDetailtById: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  deleteUserModal: boolean;
  setDeleteUserModal: React.Dispatch<React.SetStateAction<boolean>>;
}
