import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Links from "./Links";
import { useToggle } from "./ToggleContext";

const MobileMenu = ({ t }) => {
  const { toggleMenu, isMenuOpen } = useToggle();

  return (
    <Drawer open={isMenuOpen} onClose={toggleMenu} direction="right">
      <nav className="navbar-mobile">
        <div className="w-full">
          <CloseIcon
            alt="Close menu"
            width={35}
            height={35}
            onClick={toggleMenu}
            className="cursor-pointer float-right mt-4 mr-4 fill-yellow-ukraine"
          />
        </div>
        <Links t={t} />
      </nav>
    </Drawer>
  );
};

export default MobileMenu;
