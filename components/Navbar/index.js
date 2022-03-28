import { useState } from "react";
import NavLink from "next/link";
import { useTranslation } from "next-i18next";
import Links from "./Links";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import { ToggleProvider } from "./ToggleContext";

const Navbar = () => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <ToggleProvider value={{ toggleMenu, isMenuOpen, setIsMenuOpen }}>
      <section className="w-full bg-blue-ukraine text-white">
        <div className="container mx-auto max-w-6xl py-5 flex flex-row items-center flex-nowrap">
          <div className="grow ml-4 text-xl">
            <NavLink href="/">
              <a className="font-semibold text-yellow-ukraine">
                UASafety.org
              </a>
            </NavLink>
          </div>
          <div className="hidden lg:block mx-4">
            <nav className="navbar">
              <Links t={t} vertical={false} />
            </nav>
          </div>
          <MobileMenuButton />
        </div>
        <MobileMenu t={t} />
      </section>
    </ToggleProvider>
  );
};
export default Navbar;
