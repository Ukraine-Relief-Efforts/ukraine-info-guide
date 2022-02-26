import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../globalState/slices/currentPage";

const Link = ({ title, url }) => {
  const dispatch = useDispatch();
  return (
    <NavLink className={({ isActive }) => `navbar-item ${isActive ? "navbar-item-active" : ""}`} style={{ padding: "0.3em 0.5em", fontSize: "1em" }} onClick={() => dispatch(setCurrentPage({ page: title }))} to={url}>
      {title}
    </NavLink>
  );
};

export default Link;
