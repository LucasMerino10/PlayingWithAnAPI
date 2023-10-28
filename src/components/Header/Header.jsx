import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="nav">
        <img
          src="../src/assets/popcorn.svg"
          alt="popcorn logo"
          className="nav__img"
        />
        <NavLink
          to="/populaires"
          className={({ isActive }) =>
            isActive ? "nav__button nav__button--active" : "nav__button"
          }
        >
          Films Populaires
        </NavLink>

        <NavLink
          to="/oldies"
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
