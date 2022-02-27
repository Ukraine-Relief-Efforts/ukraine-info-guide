import { NavLink } from "react-router-dom";
import { useToggle } from "./ToggleContext";

const Link = ({ title, url }) => {
  const toggleMenu = useToggle();

  return (
    <NavLink
      className={({ isActive }) => `navbar-item ${isActive ? "navbar-item-active" : ""}`}
      style={{ padding: "0.3em 0.5em", fontSize: "1em" }}
      to={url}
      onClick={toggleMenu}
    >
      {title}
    </NavLink>
  );
};

export default Link;
