import { NavLink } from "react-router-dom";
export default function Navigate() {
  const activeClass = (params) => {
    return params.isActive ? "active-link" : "link";
  };

  return (
    <div className="nav">
      <ul className="nav-cont">
        <li>
          <NavLink className={activeClass} to="/">
            All
          </NavLink>
        </li>
        <li>
          <NavLink className={activeClass} to="/active">
            Active
          </NavLink>
        </li>
        <li>
          <NavLink className={activeClass} to="/completed">
            Completed
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
