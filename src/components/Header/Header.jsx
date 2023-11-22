import { NavLink, useLocation } from "react-router-dom";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import useLanguageContext from "../../contexts/LanguageContext";
import PropTypes from "prop-types";

function Header({ setPage }) {
  const { language } = useLanguageContext();
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
        <LanguageSwitch />
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
          {language === "fr-FR" ? "Populaires" : "Popular"}
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
          {language === "fr-FR" ? "Sortis avant 2000" : "Oldies"}
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
          {language === "fr-FR" ? "Bientôt" : "Upcoming"}
        </NavLink>
      </nav>
    </>
  );
}

Header.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Header;
