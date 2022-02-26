import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import menuSvg from "../../assets/menu.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentPage, openMenu } from "../../globalState/slices/currentPage";
import LanguagePicker from "./LanguagePicker";

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

const MobileMenu = ({ page }) => {
  const dispatch = useDispatch();
  return (
    <img
      src={menuSvg}
      alt="menu"
      width={40}
      onClick={() => dispatch(openMenu({ menuOpen: !page.menuOpen }))}
      className="cursor-pointer"
    />
  );
}

const Navbar = () => {
  const page = useSelector((state) => state.currentPage);
  const { t } = useTranslation();
  return (
    <section>
      <div className="bg-gray-200 py-5 flex flex-row items-center">
        <div className="grow ml-2 text-lg">LeaveUkraine.com</div>
        <LanguagePicker />
        <MobileMenu page={page} />
        <div className={page.menuOpen ? "block" : "hidden"}>
          <nav className="navbar-mobile">
            <Links t={t} />
          </nav>
        </div>
        <nav className="navbar">
          <Links t={t} />
        </nav>
      </div>
    </section>
  );
}
export default Navbar;
