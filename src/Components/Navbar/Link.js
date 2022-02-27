import { NavLink } from "react-router-dom";

const Link = ({ title, url }) => {
  return (
    <NavLink
      className={({ isActive }) => `navbar-item ${isActive ? "navbar-item-active" : ""}`}
      style={{ padding: "0.3em 0.5em", fontSize: "1em" }}
      to={url}
    >
      {title}
    </NavLink>
  );
};

export default Link;
