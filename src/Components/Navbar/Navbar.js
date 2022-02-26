import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import menuSvg from "../../assets/menu.svg";
import closeSvg from "../../assets/close.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentPage, openMenu } from "../../globalState/slices/currentPage";
import LanguagePicker from "./LanguagePicker";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Link = ({ title, url }) => {
  const dispatch = useDispatch();
  return (
    <NavLink
      className={({ isActive }) =>
        `navbar-item ${isActive ? "navbar-item-active" : ""}`
      }
      onClick={() => dispatch(setCurrentPage({ page: title }))}
      to={url}
    >
      {title}
    </NavLink>
  );
}

const Links = ({ t }) => {
  return (
    <>
      <Link title={t("Leave Ukraine")} url="/" />
      <Link title={t("Border info")} url="/border-information" />
      <Link title={t("About")} url="/about" />
      <Link title={t("Services")} url="/services" />
    </>
  );
}

const MobileMenuButton = ({ page, toggleMenu }) => {
  return (
    <img
      src={menuSvg}
      alt="Open menu"
      width={35}
      onClick={toggleMenu}
      className="cursor-pointer mr-4 ml-4"
    />
  );
}

const Navbar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const page = useSelector((state) => state.currentPage);

  const toggleMenu = () => dispatch(openMenu({ menuOpen: !page.menuOpen }))

  return (
    <section>
      <div className="bg-gray-200 py-5 flex flex-row items-center">
        <div className="grow ml-2 text-lg">LeaveUkraine.com</div>
        <LanguagePicker />
        <MobileMenuButton {...{ page, toggleMenu }} />
        <nav className="navbar">
          <Links t={t} />
        </nav>
      </div>
      <Drawer
        open={page.menuOpen}
        onClose={toggleMenu}
        direction="right"
      >
        <nav className="navbar-mobile">
          <div className="w-full">
            <img
              src={closeSvg}
              alt="Close menu"
              width={40}
              onClick={toggleMenu}
              className="cursor-pointer float-right mt-4 mr-4"
            />
          </div>
          <Links t={t} />
        </nav>
      </Drawer>
    </section>
  );
}
export default Navbar;
