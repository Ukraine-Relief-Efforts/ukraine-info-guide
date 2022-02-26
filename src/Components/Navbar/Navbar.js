import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import menuSvg from "../../assets/menu.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentPage, openMenu } from "../../globalState/slices/currentPage";

function Navbar() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.currentPage);
  console.log(page);
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
          onClick={() => dispatch(openMenu({ menuOpen: !page.menuOpen }))}
        >
          <img src={menuSvg} alt="menu" width={40} />
          <p className="text-xl font-semibold ml-2">{t(`${page.page}`)}</p>
        </div>
        <div className={page.menuOpen ? "block" : "hidden"}>
          <nav className="navbar-mobile">
            <NavLink
              onClick={() =>
                dispatch(setCurrentPage({ page: "Leave Ukraine" }))
              }
              className={({ isActive }) =>
                `navbar-item ${isActive ? "navbar-item-active" : ""}`
              }
              to="/"
            >
              {t("Leave Ukraine")}
            </NavLink>

            <NavLink
              onClick={() => dispatch(setCurrentPage({ page: "Border info" }))}
              className={({ isActive }) =>
                `navbar-item ${isActive ? "navbar-item-active" : ""}`
              }
              to="/border-information"
            >
              {t("Border info")}
            </NavLink>

            <NavLink
              onClick={() => dispatch(setCurrentPage({ page: "About" }))}
              className={({ isActive }) =>
                `navbar-item ${isActive ? "navbar-item-active" : ""}`
              }
              to="/about"
            >
              {t("About")}
            </NavLink>

            <NavLink
              onClick={() => dispatch(setCurrentPage({ page: "Services" }))}
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
