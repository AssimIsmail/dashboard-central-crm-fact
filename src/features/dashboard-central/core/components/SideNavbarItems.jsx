import { Link } from "react-router-dom";

export default function SideNavbarItems({ to, name, icon: Icon }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 p-2 px-4  border-gray-300 rounded-lg bg-white text-gray-800 font-semibold border  hover:border-gray-600  mb-2"
    >
      {Icon && <Icon className="text-gray-800" size={20} />}
      <span className="">{name}</span>
    </Link>
  );
}