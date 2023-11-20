import MovieCard from "../MovieCard/movieCard";
import { useState, useEffect } from "react";
import useLanguageContext from "../../contexts/LanguageContext";
import PropTypes from "prop-types";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

function MovieList({ page, setPage }) {
  const { id } = useParams();
  const { language } = useLanguageContext();
  const location = useLocation();
  const navigate = useNavigate();
  const movieList = useLoaderData();
  const [totalPages, setTotalPages] = useState(0);
  const [totalMovies, setTotalMovies] = useState(0);

  useEffect(() => {
    if (parseInt(id) !== page) {
      setPage(parseInt(id));
    }
    setTotalPages(movieList.total_pages);
    setTotalMovies(movieList.total_results);
    // if ()
  }, [id, language]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // async function fetchData(url) {
  //   const response = await axios.get(url);
  //   // setMovieListDisplay(response.data.results);
  //   setTotalPages(movieList.total_pages);
  //   setTotalMovies(movieList.total_results);
  // }

  function getCurrentUrl() {
    const currentURL = location.pathname;
    const urlWithoutID = currentURL.replace(/\/\d+$/, "");
    return urlWithoutID;
  }

  function pageUp() {
    const url = getCurrentUrl();
    navigate(`${url}/${parseInt(id) + 1}`);
    // setPage(parseInt(id) + 1);
  }
  function pageDown() {
    if (page > 1) {
      const url = getCurrentUrl();
      navigate(`${url}/${parseInt(id) - 1}`);
      // setPage(parseInt(id) - 1);
    }
  }

  return (
    <>
      <section className="movieSection">
        {movieList.results.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterImg={movie.poster_path}
            posterAlt={movie.backdrop_path}
            releaseDate={movie.release_date}
            rating={movie.vote_average}
          />
        ))}
      </section>
      <p>
        {language === "fr-FR"
          ? `Nombre de pages : ${totalPages}`
          : `Total pages : ${totalPages}`}
      </p>
      <p>
        {language === "fr-FR"
          ? `Nombre de films : ${totalMovies}`
          : `Total movies : ${totalMovies}`}
      </p>
      <nav className="pages">
        <button
          className={
            id > 1 ? "pages__button" : "pages__button pages__button--disabled"
          }
          type="button"
          onClick={pageDown}
          disabled={id <= 1 ? "disabled" : ""}
        >
          {language === "fr-FR" ? "Page Précédente" : "Previous Page"}
        </button>
        <p>{page}</p>
        <button
          className={
            id < totalPages
              ? "pages__button"
              : "pages__button pages__button--disabled"
          }
          type="button"
          onClick={pageUp}
          disabled={id >= totalPages ? "disabled" : ""}
        >
          {language === "fr-FR" ? "Page Suivante" : "Next Page"}
        </button>
      </nav>
    </>
  );
}

MovieList.propTypes = {
  list: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  minDate: PropTypes.string.isRequired,
  maxDate: PropTypes.string.isRequired,
};

export default MovieList;
