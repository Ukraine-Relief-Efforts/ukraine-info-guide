import menuSvg from "../../assets/menu.svg";

const MobileMenuButton = ({ page, toggleMenu }) => {
  return (
    <img
      src={menuSvg}
      alt="Open menu"
      width={35}
      onClick={toggleMenu}
      className="cursor-pointer mr-4 ml-4"
    />
  );
}

export default MobileMenuButton;
