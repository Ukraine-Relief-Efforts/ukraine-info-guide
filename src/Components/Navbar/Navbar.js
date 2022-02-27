import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Links from "./Links";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import { ToggleProvider } from "./ToggleContext";

const Navbar = () => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <ToggleProvider value={toggleMenu}>
      <section className="w-full bg-blue-ukraine text-white">
        <div className="container mx-auto max-w-6xl py-5 flex flex-row items-center">
          <div className="grow ml-4 text-xl">
            <NavLink className="font-semibold text-yellow-dark" to="/">
              LeaveUkraine.com
            </NavLink>
          </div>
          <MobileMenuButton />
          <div className="hidden lg:block mx-4">
            <nav className="navbar">
              <Links t={t} />
            </nav>
          </div>
        </div>
        <MobileMenu {...{ isMenuOpen, t }} />
      </section>
    </ToggleProvider>
  );
};
export default Navbar;
