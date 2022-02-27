import closeSvg from "../../assets/close.svg";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Links from "./Links";
import { useToggle } from "./ToggleContext";

const MobileMenu = ({ t }) => {
  const { toggleMenu, isMenuOpen } = useToggle();

  return (
    <Drawer
      open={isMenuOpen}
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
  );
}

export default MobileMenu;
