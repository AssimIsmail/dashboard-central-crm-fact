import SideNavbarItems from "./SideNavbarItems";
import { FaChartBar } from "react-icons/fa";
import { GoOrganization } from "react-icons/go";
import { LuUsersRound } from "react-icons/lu";

export default function SideNavbar() {
  return (
    <div className="sticky top-0 h-screen w-64  p-4 hidden md:block">
      <SideNavbarItems to={""} name={"Tableau de Bord"} icon={FaChartBar} />
      <SideNavbarItems
        to={"entreprises"}
        name={"Entreprises"}
        icon={GoOrganization}
      />
      <SideNavbarItems
        to={"utilisateurs"}
        name={"Utilisateurs"}
        icon={LuUsersRound}
      />
    </div>
  );
}