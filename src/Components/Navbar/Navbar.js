import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();

  return (
    <section>
      <nav className="navbar">
        <NavLink
          className={({ isActive }) =>
            `navbar-item ${isActive ? "navbar-item-active" : ""}`
          }
          to="/"
        >
          {t("Leave Ukraine")}
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `navbar-item ${isActive ? "navbar-item-active" : ""}`
          }
          to="/border-information"
        >
          {t("Border info")}
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `navbar-item ${isActive ? "navbar-item-active" : ""}`
          }
          to="/about"
        >
          {t("About")}
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `navbar-item ${isActive ? "navbar-item-active" : ""}`
          }
          to="/services"
        >
          Services
        </NavLink>
      </nav>
    </section>
  );
}
export default Navbar;
