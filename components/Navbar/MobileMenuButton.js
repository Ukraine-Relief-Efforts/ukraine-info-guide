import MenuIcon from "../../icons/menu.svg";
import { useToggle } from "./ToggleContext";

const MobileMenuButton = () => {
  const { toggleMenu } = useToggle();

  return (
    <MenuIcon
      alt="Open menu"
      width={40}
      onClick={toggleMenu}
      className="cursor-pointer mr-4 ml-4 mt-4 h-9 fill-yellow-ukraine scale-[1.3]"
    />
  );
};

export default MobileMenuButton;
