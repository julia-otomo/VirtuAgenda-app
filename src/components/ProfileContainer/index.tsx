import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { ProfileCard } from "./ProfileCard";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Carousel } from "../Carousel";

export const ProfileContainer = () => {
  const {
    user,
    logout,
    setEditUserModal,
    setCreateUserDetailModal,
    setDeleteUserModal,
  } = useContext(UserContext);

  return (
    <div className="w-full h-full flex flex-col items-center gap-8">
      <div className="w-4/5 flex flex-col gap-8 mt-5 lg:w-[70%]">
        <button
          onClick={logout}
          className="self-end py-2 px-4 border-box bg-amber-700 rounded-xl text-sm text-stone-100 hover:bg-amber-900 transition duration-0 hover:duration-300 cursor-pointer lg:text-lg"
        >
          Logout
        </button>
        <div className="flex flex-col gap-8 bg-[url('./assets/wallpaper3.jpg')] py-6 px-4 border-box rounded-xl">
          <img
            src={user!.image}
            alt=""
            className="min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px] rounded-full self-center border-4 border-lime-800 object-cover hover:scale-125 lg:min-w-[150px] lg:min-h-[150px]"
          />
          <div className="flex flex-col gap-5 bg-stone-50 p-4 border-box rounded-xl border-dotted border-4 border-lime-800">
            <h3 className="font-medium text-lg text-stone-800 lg:text-xl">
              {user!.name}
            </h3>
            <p className="text-sm text-stone-800 text-justify lg:text-lg">{`Usuário criado em: ${user!.addedAt
              .split("-")
              .reverse()
              .join("/")}`}</p>
            <div className="flex flex-row gap-3 justify-end">
              <button onClick={() => setEditUserModal(true)}>
                <FiEdit className=" stroke-lime-800 hover:scale-125 lg:min-w-[25px] lg:min-h-[25px]" />
              </button>
              <button onClick={() => setDeleteUserModal(true)}>
                <MdDelete className="fill-lime-800 hover:scale-125 lg:min-w-[25px] lg:min-h-[25px]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/5 flex flex-col gap-8 py-6 px-4 lg:w-[70%]">
        <div className="flex flex-col gap-5">
          <h2 className="font-medium text-lime-800 text-xl lg:text-2xl">
            Suas informações de contato
          </h2>
          <button
            onClick={() => setCreateUserDetailModal(true)}
            className="self-end py-2 px-4 border-box bg-lime-700 rounded-xl text-sm text-stone-100 hover:bg-lime-900 transition duration-0 hover:duration-300 cursor-pointer lg:text-lg"
          >
            Nova informação
          </button>
        </div>

        {user && user.details ? (
          <Carousel>
            {user?.details.map((detail) => (
              <ProfileCard
                id={detail.id}
                email={detail.email}
                phone={detail.phone}
                contactTitle={detail.contactTitle}
                key={detail.id}
              />
            ))}
          </Carousel>
        ) : null}
      </div>
    </div>
  );
};
