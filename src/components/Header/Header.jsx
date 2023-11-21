import { NavLink, useLocation } from "react-router-dom";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import PropTypes from "prop-types";

function Header({ setPage }) {
  const location = useLocation();
  // const { language, setLanguage } = useLanguageContext();

  function handleClick(url) {
    if (!location.pathname.includes(url)) {
      setPage(1);
    }
  }

  return (
    <>
      <nav className="nav">
        {/* <button type="button" onClick={switchLanguage}>
          Switch Language
        </button> */}
        <img
          src="../src/assets/popcorn.svg"
          alt="popcorn logo"
          className="nav__img"
        />
        <LanguageSwitch />
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
