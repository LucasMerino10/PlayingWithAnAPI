import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ setPage }) {
  const location = useLocation();

  function handleClick(url) {
    if (!location.pathname.includes(url)) {
      setPage(1);
    }
  }
  return (
    <>
      <nav className="nav">
        <img
          src="../src/assets/popcorn.svg"
          alt="popcorn logo"
          className="nav__img"
        />
        <NavLink
          to={`/populaires/1`}
          className={
            location.pathname.includes("populaires")
              ? "nav__button nav__button--active"
              : "nav__button"
          }
          onClick={() => handleClick("populaires")}
        >
          Films Populaires
        </NavLink>

        <NavLink
          to={`/oldies/1`}
          className={
            location.pathname.includes("oldies")
              ? "nav__button nav__button--active"
              : "nav__button"
          }
          onClick={() => handleClick("oldies")}
        >
          Oldies
        </NavLink>
        <NavLink
          to={`/upcoming/1`}
          className={
            location.pathname.includes("upcoming")
              ? "nav__button nav__button--active"
              : "nav__button"
          }
          onClick={() => handleClick("upcoming")}
        >
          Films à venir
        </NavLink>
      </nav>
    </>
  );
}

Header.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Header;
