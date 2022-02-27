import menuSvg from "../../assets/menu.svg";
import { useToggle } from "./ToggleContext";

const MobileMenuButton = () => {
  const toggleMenu = useToggle();

  return (
    <img
      src={menuSvg}
      alt="Open menu"
      width={35}
      onClick={toggleMenu}
      className="cursor-pointer mr-4 ml-4 lg:hidden"
    />
  );
}

export default MobileMenuButton;
