import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { motion } from "framer-motion";

export const DeleteUserDetailModal = () => {
  const { deleteUserDetails, setDeleteUserDetailModal, userDetail } =
    useContext(UserContext);

  const deleteFunction = async () => {
    await deleteUserDetails(userDetail!.contactTitle);
    setDeleteUserDetailModal(false);
  };

  return (
    <div className="fixed top-0 w-screen h-screen z-30 bg-stone-400 bg-opacity-50 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-4/5 max-w-[400px] bg-stone-100 py-6 px-4 border-box rounded-3xl flex flex-col gap-6 items-center relative"
      >
        <h2 className="text-lg text-stone-800">{`Tem certeza que deseja excluir essa informação ?`}</h2>
        <div className="flex flex-row justify-around w-full">
          <button
            onClick={deleteFunction}
            className="py-2 px-4 w-2/5 border-box bg-lime-700 rounded-3xl mt-2 text-stone-100 hover:bg-lime-900 transition duration-0 hover:duration-300 cursor-pointer text-center"
          >
            Excluir
          </button>
          <button
            onClick={() => setDeleteUserDetailModal(false)}
            className="py-2 px-4 w-2/5 border-box bg-amber-700 rounded-3xl mt-2 text-stone-100 hover:bg-amber-900 transition duration-0 hover:duration-300 cursor-pointer text-center"
          >
            Cancelar
          </button>
        </div>
      </motion.div>
    </div>
  );
};
