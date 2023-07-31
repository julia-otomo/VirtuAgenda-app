import { useContext } from "react";
import { Header } from "../../components/Header";
import { UserContext } from "../../contexts/userContext";
import { HeaderButton } from "../../components/Header/HeaderButton";
import { ContactContext } from "../../contexts/contactContext";
import { ContactContainer } from "../../components/ContactContainer";
import { ProfileContainer } from "../../components/ProfileContainer";

export const Dashboard = () => {
  const { menu } = useContext(UserContext);
  const { headerTitle } = useContext(ContactContext);
  return (
    <div className="w-screen ">
      <Header />
      <main className="mt-16 w-screen h-screen flex flex-col items-center bg-orange-200">
        {!menu ? null : (
          <div className="fixed z-10 flex flex-col gap-5 top-16 left-0 w-full bg-pink-400 p-3 box-border  items-center lg:hidden">
            <HeaderButton title="Contatos" id="contacts" />
            <HeaderButton title="Perfil" id="profile" />
          </div>
        )}

        {headerTitle == "contacts" ? <ContactContainer /> : null}
        {headerTitle == "profile" ? <ProfileContainer /> : null}
      </main>
    </div>
  );
};
