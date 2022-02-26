import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../globalState/slices/currentPage";

const Link = ({ title, url }) => {
  const dispatch = useDispatch();
  return (
    <NavLink
      className={({ isActive }) =>
        `navbar-item ${isActive ? "navbar-item-active" : ""}`
      }
      onClick={() => dispatch(setCurrentPage({ page: title }))}
      to={url}
    >
      {title}
    </NavLink>
  );
}

export default Link;
