import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { UpdateUserModal } from "../Modals/UpdateUser";
import { ProfileCard } from "./ProfileCard";
import { CreateUserDetailModal } from "../Modals/CreateUserDetailsModal";
import { UpdateUserDetailModal } from "../Modals/UpdateUserDetailModaL";
import { DeleteUserDetailModal } from "../Modals/DeleteUserDetailModal";

export const ProfileContainer = () => {
  const {
    user,
    logout,
    editUserModal,
    setEditUserModal,
    createUserDetailModal,
    setCreateUserDetailModal,
    editUserDetailModal,
    deleteUserDetailModal,
  } = useContext(UserContext);

  return (
    <div>
      <div>
        <button onClick={logout}>Logout</button>
        <div>
          <img src={user!.image} alt="" />
          <div>
            <h3>{user!.name}</h3>
            <p>{`Usuário criado em: ${user!.addedAt
              .split("-")
              .reverse()
              .join("/")}`}</p>
            <button onClick={() => setEditUserModal(true)}>Editar</button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2>Suas informações de contato</h2>
          <button onClick={() => setCreateUserDetailModal(true)}>
            Nova informação
          </button>
        </div>

        {user && user.details ? (
          <ul>
            {user!.details.map((detail) => (
              <ProfileCard
                id={detail.id}
                email={detail.email}
                phone={detail.phone}
                contactTitle={detail.contactTitle}
                key={detail.id}
              />
            ))}
          </ul>
        ) : null}
      </div>

      {editUserModal ? <UpdateUserModal /> : null}
      {createUserDetailModal ? <CreateUserDetailModal /> : null}
      {editUserDetailModal ? <UpdateUserDetailModal /> : null}
      {deleteUserDetailModal ? <DeleteUserDetailModal /> : null}
    </div>
  );
};
