import CloseIcon from "../../icons/close.svg";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Links from "./Links";
import { useToggle } from "./ToggleContext";

const MobileMenu = ({ t }) => {
  const { toggleMenu, isMenuOpen } = useToggle();

  return (
    <Drawer
      className="overflow-y-hidden"
      open={isMenuOpen}
      onClose={toggleMenu}
      direction="right"
      zIndex={10000}
    >
      <nav className="navbar-mobile">
        <div className="w-full">
          <CloseIcon
            alt="Close menu"
            onClick={toggleMenu}
            className="cursor-pointer mt-8 mr-8 fill-yellow-ukraine scale-[1.3] ml-auto"
          />
        </div>
        <Links t={t} vertical={true} />
      </nav>
    </Drawer>
  );
};

export default MobileMenu;
