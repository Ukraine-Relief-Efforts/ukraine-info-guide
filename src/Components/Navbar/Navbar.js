import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <section>
      <nav className="navbar">
        <NavLink className={({ isActive }) => `navbar-item ${isActive ? "navbar-item-active" : ""}`} to="/">
          Home
        </NavLink>

        <NavLink className={({ isActive }) => `navbar-item ${isActive ? "navbar-item-active" : ""}`} to="/border-information">
          Border info
        </NavLink>

        <NavLink className={({ isActive }) => `navbar-item ${isActive ? "navbar-item-active" : ""}`} to="/about">
          About
        </NavLink>

        <NavLink className={({ isActive }) => `navbar-item ${isActive ? "navbar-item-active" : ""}`} to="/services">
          Services
        </NavLink>
      </nav>
    </section>
  );
}
export default Navbar;
