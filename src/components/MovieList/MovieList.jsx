import MovieCard from "../MovieCard/movieCard";
import { useState, useEffect } from "react";
import axios from "axios";

function MovieList({ list }) {
  const [page, setPage] = useState(1);
  const [movieListDisplay, setMovieListDisplay] = useState([]);
  const popularMovies = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${page}&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=1000&api_key=21e02b5068821db1ee7df050d103412c`;
  const oldMovies = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${page}&primary_release_year=2000&sort_by=popularity.desc&api_key=21e02b5068821db1ee7df050d103412c`;
  const upcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=${page}&api_key=21e02b5068821db1ee7df050d103412c`;
  const imgPath = "https://image.tmdb.org/t/p/original";

  function getMovies(url) {
    axios.get(url).then((response) => {
      // const movies = movieListDisplay.slice();
      const newMovies = response.data.results;
      // movies.concat(newMovies);
      console.log(newMovies);
      setMovieListDisplay(response.data.results);
    });
  }

  useEffect(() => {
    switch (list) {
      case "populaires":
        getMovies(popularMovies);
        break;
      case "old":
        getMovies(oldMovies);
        break;
      case "upcoming":
        getMovies(upcomingMovies);
        break;
    }
  }, []);

  return (
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
  );
}

export default MovieList;
