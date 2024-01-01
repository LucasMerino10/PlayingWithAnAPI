import MovieCard from "../MovieCard/MovieCard";
import { useState, useEffect } from "react";
import useGeneralContext from "../../contexts/GeneralContext";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

function MovieList() {
  const { id } = useParams();
  const { page, setPage, language, type, getCurrentUrl } = useGeneralContext();
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
  }, [id, language]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  function pageUp() {
    const url = getCurrentUrl(location);
    navigate(`${url}/${parseInt(id) + 1}`);
  }
  function pageDown() {
    if (page > 1) {
      const url = getCurrentUrl(location);
      navigate(`${url}/${parseInt(id) - 1}`);
    }
  }

  return (
    <>
      <section className="movieSection">
        {movieList.results.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={type === "movies" ? movie.title : movie.name}
            posterImg={movie.poster_path}
            posterAlt={movie.backdrop_path}
            releaseDate={
              type === "movies" ? movie.release_date : movie.first_air_date
            }
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
          {language === "fr-FR" ? "Précédente" : "Previous"}
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
          {language === "fr-FR" ? "Suivante" : "Next"}
        </button>
      </nav>
    </>
  );
}

export default MovieList;
