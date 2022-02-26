import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import menuSvg from "../../assets/menu.svg";

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <div className="bg-gray-200 py-5">
        <div
          className="sm:hidden flex items-center justify-center cursor-pointer"
          onClick={toggleMenu}
        >
          <img src={menuSvg} alt="menu" width={40} />
        </div>
        <div className={isOpen ? "block" : "hidden"}>
          <nav className="navbar-mobile">
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
        </div>
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
      </div>
    </section>
  );
}
export default Navbar;
