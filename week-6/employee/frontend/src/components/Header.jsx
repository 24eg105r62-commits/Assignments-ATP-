import { NavLink } from "react-router";

function Header() {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl text-sm font-medium transition ${
      isActive ? "bg-white text-gray-700" : "text-white hover:bg-gray-600"
    }`;

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-700 shadow-md">
      <NavLink to="" className="text-white text-xl font-bold tracking-wide">
        EmpManager
      </NavLink>
      <div className="flex gap-2">
        <NavLink to="" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="create-emp" className={linkClass}>
          + Add Employee
        </NavLink>
        <NavLink to="list" className={linkClass}>
          Employees
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;