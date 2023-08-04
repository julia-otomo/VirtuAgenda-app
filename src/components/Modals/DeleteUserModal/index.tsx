import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";

export const DeleteUserModal = () => {
  const { setDeleteUserModal, deleteUser } = useContext(UserContext);

  const deleteFunction = async () => {
    await deleteUser();
    setDeleteUserModal(false);
  };

  return (
    <div className="fixed top-0 w-screen h-screen z-30 bg-stone-400 bg-opacity-50 flex flex-col items-center justify-center">
      <div className="w-4/5 max-w-[400px] bg-stone-100 py-6 px-4 border-box rounded-3xl flex flex-col gap-6 items-center relative">
        <h2 className="text-lg text-stone-800">
          Tem certeza que deseja excluir sua conta ?
        </h2>
        <div className="flex flex-row justify-around w-full">
          <button
            onClick={deleteFunction}
            className="py-2 px-4 w-2/5 border-box bg-lime-700 rounded-3xl mt-2 text-stone-100 hover:bg-lime-900 transition duration-0 hover:duration-300 cursor-pointer text-center"
          >
            Excluir
          </button>
          <button
            onClick={() => setDeleteUserModal(false)}
            className="py-2 px-4 w-2/5 border-box bg-amber-700 rounded-3xl mt-2 text-stone-100 hover:bg-amber-900 transition duration-0 hover:duration-300 cursor-pointer text-center"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
