import { useContext } from "react";
import { Header } from "../../components/Header";
import { UserContext } from "../../contexts/userContext";
import { HeaderButton } from "../../components/Header/HeaderButton";
import { ContactContext } from "../../contexts/contactContext";
import { ContactContainer } from "../../components/ContactContainer";
import { ProfileContainer } from "../../components/ProfileContainer";
import { CreateContactModal } from "../../components/Modals/CreateContact";
import { DeleteContactModal } from "../../components/Modals/DeleteContactModal";
import { UpdateContactModal } from "../../components/Modals/UpdateContactModal";

export const Dashboard = () => {
  const { menu } = useContext(UserContext);
  const { headerTitle, createModal, updateModal, deleteModal } =
    useContext(ContactContext);
  return (
    <>
      <div className="min-w-screen min-h-screen">
        <Header />
        <main className="mt-16 min-w-screen min-h-screen flex flex-col items-center bg-lime-50">
          {!menu ? null : (
            <div className="fixed z-10 flex flex-col top-16 left-0 w-full bg-lime-700 items-center lg:hidden">
              <HeaderButton title="Contatos" id="contacts" />
              <HeaderButton title="Perfil" id="profile" />
            </div>
          )}

          {headerTitle == "contacts" ? <ContactContainer /> : null}
          {headerTitle == "profile" ? <ProfileContainer /> : null}
        </main>
        {createModal ? <CreateContactModal /> : null}
        {updateModal ? <UpdateContactModal /> : null}
        {deleteModal ? <DeleteContactModal /> : null}
      </div>
    </>
  );
};
