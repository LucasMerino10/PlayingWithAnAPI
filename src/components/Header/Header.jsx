import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="nav">
        <NavLink
          to="/populaires"
          className={({ isActive }) =>
            isActive ? "nav__button nav__button--active" : "nav__button"
          }
        >
          Films Populaires
        </NavLink>

        <NavLink
          to="/old"
          className={({ isActive }) =>
            isActive ? "nav__button nav__button--active" : "nav__button"
          }
        >
          Films sortis avant 2000
        </NavLink>
        <NavLink
          to="/upcoming"
          className={({ isActive }) =>
            isActive ? "nav__button nav__button--active" : "nav__button"
          }
        >
          Films à venir
        </NavLink>
      </nav>
    </>
  );
}

export default Header;
