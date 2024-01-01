import { NavLink, useLocation } from "react-router-dom";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import TypeSwitch from "../TypeSwitch/TypeSwitch";
import useGeneralContext from "../../contexts/GeneralContext";
import logo from "../../assets/popcorn.svg";

function Header() {
  const { setPage, language, type } = useGeneralContext();
  const location = useLocation();

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
        <TypeSwitch />
        <img src={logo} alt="popcorn logo" className="nav__img" />
        <NavLink
          to={type === "movies" ? "/movies/trending/1" : "/series/trending/1"}
          className={
            location.pathname.includes("trending")
              ? "nav__button nav__button--active"
              : "nav__button"
          }
          onClick={() => handleClick("trending")}
        >
          {language === "fr-FR" ? "Populaires" : "Trending"}
        </NavLink>

        <NavLink
          to={type === "movies" ? "/movies/top-rated/1" : "/series/top-rated/1"}
          className={
            location.pathname.includes("top-rated")
              ? "nav__button nav__button--active"
              : "nav__button"
          }
          onClick={() => handleClick("top-rated")}
        >
          {language === "fr-FR" ? "Les mieux notés" : "Top rated"}
        </NavLink>

        <NavLink
          to={type === "movies" ? "/movies/oldies/1" : "/series/oldies/1"}
          className={
            location.pathname.includes("oldies")
              ? "nav__button nav__button--active"
              : "nav__button"
          }
          onClick={() => handleClick("oldies")}
        >
          {language === "fr-FR" ? "Sortis avant 2000" : "Oldies"}
        </NavLink>
        {type === "movies" && (
          <NavLink
            to={`/movies/upcoming/1`}
            className={
              location.pathname.includes("upcoming")
                ? "nav__button nav__button--active"
                : "nav__button"
            }
            onClick={() => handleClick("upcoming")}
          >
            {language === "fr-FR" ? "Bientôt" : "Upcoming"}
          </NavLink>
        )}
      </nav>
    </>
  );
}

export default Header;
