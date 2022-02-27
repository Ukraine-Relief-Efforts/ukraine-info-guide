import closeSvg from "../../assets/close.svg";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Links from "./Links";

const MobileMenu = ({ t, page, toggleMenu }) => {
  return (
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
  );
}

export default MobileMenu;
