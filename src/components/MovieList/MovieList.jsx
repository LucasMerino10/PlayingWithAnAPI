import MovieCard from "../MovieCard/movieCard";
import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function MovieList({ list, page, setPage, minDate, maxDate }) {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [movieListDisplay, setMovieListDisplay] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalMovies, setTotalMovies] = useState(0);
  const apiKey = "api_key=21e02b5068821db1ee7df050d103412c";
  const minOld = "1970-01-01";
  const maxOld = "2000-01-01";

  const popularMovies = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${id}&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=5000&${apiKey}`;
  // const oldMovies = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${pageNumber}&primary_release_year=2000&sort_by=popularity.desc&${apiKey}`;
  const oldMovies = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${id}&primary_release_date.gte=${minOld}&primary_release_date.lte=${maxOld}&sort_by=popularity.desc&vote_count.gte=1000&${apiKey}`;
  // const upcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=${pageNumber}&${apiKey}`;
  const upcomingMovies = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${id}&sort_by=popularity.desc&primary_release_date.gte=${minDate}&primary_release_date.lte=${maxDate}&${apiKey}`;
  useEffect(() => {
    if (id !== page) {
      setPage(parseInt(id));
    }
    let url = "";
    switch (list) {
      case "populaires":
        url = popularMovies;
        break;
      case "oldies":
        url = oldMovies;
        break;
      case "upcoming":
        url = upcomingMovies;
        break;
    }
    axios.get(url).then((response) => {
      setMovieListDisplay(response.data.results);
      setTotalPages(response.data.total_pages);
      setTotalMovies(response.data.total_results);
    });
    window.scrollTo(0, 0);
  }, [list, oldMovies, popularMovies, upcomingMovies]);

  function getCurrentUrl() {
    const currentURL = location.pathname;
    const urlWithoutID = currentURL.replace(/\/\d+$/, "");
    return urlWithoutID;
  }

  function pageUp() {
    const url = getCurrentUrl();
    navigate(`${url}/${parseInt(id) + 1}`);
    setPage(parseInt(id) + 1);
  }
  function pageDown() {
    if (page > 1) {
      const url = getCurrentUrl();
      navigate(`${url}/${parseInt(id) - 1}`);
      setPage(parseInt(id) - 1);
    }
  }

  return (
    <>
      <section className="movieSection">
        {movieListDisplay.map((movie) => (
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
      <p>Total pages : {totalPages}</p>
      <p>Total movies : {totalMovies}</p>
      <nav className="pages">
        <button
          className={
            id > 1 ? "pages__button" : "pages__button pages__button--disabled"
          }
          type="button"
          onClick={pageDown}
          disabled={id <= 1 ? "disabled" : ""}
        >
          Previous Page
        </button>
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
          Next Page
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
