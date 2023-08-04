import { createContext, useEffect, useState } from "react";
import {
  TUserDetailsPartialUpdate,
  iUserContextProps,
  iUserDetailsInformation,
  iUserDetailsRequest,
  iUserLogin,
  iUserProviderProps,
  iUserRequestInformation,
  iUserResponseInformation,
  iUserUpdateInformation,
} from "./@types";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({} as iUserContextProps);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUserResponseInformation | null>(null);
  const [userDetail, setUserDetail] = useState<iUserDetailsInformation | null>(
    null
  );
  const navigate = useNavigate();
  const [editUserModal, setEditUserModal] = useState(false);
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [createUserDetailModal, setCreateUserDetailModal] = useState(false);
  const [editUserDetailModal, setEditUserDetailModal] = useState(false);
  const [deleteUserDetailModal, setDeleteUserDetailModal] = useState(false);
  const [menu, setMenu] = useState(false);

  const setUserDetailtById = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const userDetailId = event.currentTarget.id;
    const userDetailFound = user!.details.find(
      (detail) => detail.id == userDetailId
    );
    setUserDetail(userDetailFound!);
  };

  useEffect(() => {
    const token = localStorage.getItem("@Token");
    const userId = localStorage.getItem("@UserId");

    if (token) {
      const autoLoginUser = async () => {
        try {
          const login = await api.get(`/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(login.data);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
          toast.error("Token expirado, realize o login novamente");
          setTimeout(() => navigate("/"), 3000);
        }
      };

      autoLoginUser();
    }
  }, []);

  const userRegister = async (data: iUserRequestInformation) => {
    try {
      await api.post("/users", data);
      toast.success("Cadastro realizado com sucesso");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Email ou telefone já cadastrados");
    }
  };

  const userLogin = async (data: iUserLogin) => {
    try {
      const login = await api.post("/login", data);
      setUser(login.data.user);
      localStorage.setItem("@Token", login.data.token);
      localStorage.setItem("@UserId", login.data.user.id);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha incorretos");
      localStorage.clear();
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("@Token");
    localStorage.removeItem("@UserId");
    navigate("/");
  };

  const updateUser = async (data: iUserUpdateInformation) => {
    const token = localStorage.getItem("@Token");
    const userId = localStorage.getItem("@UserId");
    try {
      const user = await api.patch(`/users/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(user.data);
      toast.success("Informações atualizadas");
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível atualizar as informações");
    }
  };

  const deleteUser = async () => {
    const token = localStorage.getItem("@Token");
    const userId = localStorage.getItem("@UserId");
    try {
      await api.delete(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(null);
      localStorage.removeItem("@Token");
      localStorage.removeItem("@UserId");
      toast.success("Conta deletada com sucesso");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível deletar a conta");
    }
  };

  const createUserDetails = async (data: iUserDetailsRequest) => {
    const token = localStorage.getItem("@Token");
    const userId = localStorage.getItem("@UserId");

    try {
      const newUser = await api.post(`/users/${userId}/details`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(newUser.data);
      toast.success("Nova informação criada com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Email ou telefone já existentes");
    }
  };

  const updateUserDetails = async (
    data: TUserDetailsPartialUpdate,
    contactTitle: string
  ) => {
    const token = localStorage.getItem("@Token");
    const userId = localStorage.getItem("@UserId");

    try {
      const newUser = await api.patch(
        `/users/${userId}/details/${contactTitle}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(newUser.data);
      toast.success("Informações atualizadas com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Email ou telefone já existentes");
    }
  };

  const deleteUserDetails = async (contactTitle: string) => {
    const token = localStorage.getItem("@Token");
    const userId = localStorage.getItem("@UserId");

    try {
      await api.delete(
        `/users/${userId}/details/${contactTitle}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const removeDetail: iUserDetailsInformation[] = user!.details.filter(
        (detail) =>
          detail.contactTitle.toLowerCase() != contactTitle.toLowerCase()
      );
      user!.details = removeDetail;
      setUser(user);
      toast.success("Informação deletada com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível remover essa informação");
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        editUserModal,
        setEditUserModal,
        menu,
        setMenu,
        userRegister,
        userLogin,
        logout,
        updateUser,
        deleteUser,
        createUserDetails,
        updateUserDetails,
        deleteUserDetails,
        createUserDetailModal,
        setCreateUserDetailModal,
        editUserDetailModal,
        setEditUserDetailModal,
        deleteUserDetailModal,
        setDeleteUserDetailModal,
        userDetail,
        setUserDetail,
        setUserDetailtById,
        deleteUserModal,
        setDeleteUserModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
