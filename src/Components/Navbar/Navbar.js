import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { openMenu } from "../../globalState/slices/currentPage";
import LanguagePicker from "./LanguagePicker";
import Links from "./Links";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const page = useSelector((state) => state.currentPage);

  const toggleMenu = () => dispatch(openMenu({ menuOpen: !page.menuOpen }));

  return (
    <section>
      <div className="bg-gray-200 py-5 flex flex-row items-center">
        <div className="grow ml-4 text-xl">
          <NavLink className="font-bold" to="/">
            LeaveUkraine.com
          </NavLink>
        </div>
        <LanguagePicker />
        <MobileMenuButton {...{ page, toggleMenu }} />
        <div className="hidden lg:block mx-4">
          <nav className="navbar">
            <Links t={t} />
          </nav>
        </div>
      </div>
      <MobileMenu {...{ page, toggleMenu, t }} />
    </section>
  );
};
export default Navbar;
