import { NavLink } from "react-router-dom";

export default function ListMenu({ id, path, title, icon: Icon }) {
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4 space-x-2
        ${isActive ? 
            "text-hijau bg-green-200 font-extrabold" : 
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`
    
    return (
        <NavLink id={id} to={path} className={menuClass}>
            {Icon && <Icon className="mr-4 text-xl" />}
            <span>{title}</span>
        </NavLink>
    );
}
