import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export const ProfileContainer = () => {
  const { user, logout } = useContext(UserContext);
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
            <button>Editar</button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2>Suas informações de contato</h2>
          <button>Nova informação</button>
        </div>

        <ul></ul>
      </div>
    </div>
  );
};
