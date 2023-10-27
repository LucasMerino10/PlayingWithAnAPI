import MovieCard from "../MovieCard/movieCard";
import { useState, useEffect } from "react";
import axios from "axios";

function MovieList({ list, page }) {
  const [movieListDisplay, setMovieListDisplay] = useState([]);
  const [pageNumber, setpageNumber] = useState(page);

  useEffect(() => {
    setpageNumber(page);
  }, [page]);
  const popularMovies = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${pageNumber}&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=5000&api_key=21e02b5068821db1ee7df050d103412c`;
  const oldMovies = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${pageNumber}&primary_release_year=2000&sort_by=popularity.desc&api_key=21e02b5068821db1ee7df050d103412c`;
  const upcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=${pageNumber}&api_key=21e02b5068821db1ee7df050d103412c`;
  const imgPath = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    let url = "";
    switch (list) {
      case "populaires":
        url = popularMovies;
        break;
      case "old":
        url = oldMovies;
        break;
      case "upcoming":
        url = upcomingMovies;
        break;
    }
    axios.get(url).then((response) => {
      setMovieListDisplay(response.data.results);
    });
    window.scrollTo(0, 0);
  }, [list, oldMovies, popularMovies, upcomingMovies]);

  function pageUp() {
    setpageNumber(pageNumber + 1);
  }
  function pageDown() {
    pageNumber > 1 ? setpageNumber(pageNumber - 1) : null;
  }

  return (
    <>
      <section className="movieSection">
        {movieListDisplay.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterImg={imgPath + movie.poster_path}
            posterAlt={imgPath + movie.backdrop_path}
            releaseDate={movie.release_date}
            rating={movie.vote_average}
          />
        ))}
      </section>
      <nav className="pages">
        <button
          className={
            pageNumber > 1
              ? "pages__button"
              : "pages__button pages__button--disabled"
          }
          type="button"
          onClick={pageDown}
          disabled={pageNumber <= 1 ? "disabled" : ""}
        >
          Previous Page
        </button>
        <button className="pages__button" type="button" onClick={pageUp}>
          Next Page
        </button>
      </nav>
    </>
  );
}

export default MovieList;
