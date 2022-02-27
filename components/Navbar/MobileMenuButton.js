import MenuIcon from "../../icons/menu.svg";
import { useToggle } from "./ToggleContext";

const MobileMenuButton = () => {
  const { toggleMenu } = useToggle();

  return (
    <MenuIcon
      alt="Open menu"
      width={40}
      onClick={toggleMenu}
      style={{ transform: "scale(1.3)" }}
      className="cursor-pointer mr-4 ml-4 mt-4 h-9 fill-yellow-ukraine lg:hidden"
    />
  );
};

export default MobileMenuButton;
