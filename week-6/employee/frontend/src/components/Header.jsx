import { NavLink } from "react-router";

function Header() {
  const linkClass = ({ isActive }) =>
    `px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
      isActive
        ? "bg-white text-indigo-600 shadow-md"
        : "text-indigo-100 hover:text-white hover:bg-white/20"
    }`;

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-linear-to-r from-indigo-600 to-purple-600 shadow-lg">
      <NavLink to="" className="flex items-center gap-2 group">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow">
          <span className="text-indigo-600 font-black text-sm">E</span>
        </div>
        <span className="text-white text-xl font-bold tracking-wide group-hover:opacity-90 transition">
          EmpManager
        </span>
      </NavLink>

      <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-2 rounded-full">
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