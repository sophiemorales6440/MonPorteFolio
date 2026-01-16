import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold border-b-2 border-blue-500 pb-1"
                : "text-gray-300 hover:text-white transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold border-b-2 border-blue-500 pb-1"
                : "text-gray-300 hover:text-white transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold border-b-2 border-blue-500 pb-1"
                : "text-gray-300 hover:text-white transition"
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
