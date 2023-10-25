import './App.css'
import MovieCard from './components/MovieCard/movieCard';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [page, setPage] = useState(1);
  const imgPath = "https://image.tmdb.org/t/p/original";
  const popularMovies = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${page}&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=1000&api_key=21e02b5068821db1ee7df050d103412c`;
  const oldMovies = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${page}&primary_release_year=2000&sort_by=popularity.desc&api_key=21e02b5068821db1ee7df050d103412c`;
  const upcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=${page}&api_key=21e02b5068821db1ee7df050d103412c`;

  const [active, setActive] = useState("");
  const [movieListDisplay, setMovieListDisplay] = useState([]);

  function getMovies(url, button) {
    if (active !== button) {
      setActive(button)
      // setPage(1);
      axios
      .get(url)
      .then((response) => {
        console.log(active)
        setMovieListDisplay(response.data.results)
      })
    } else {
      axios
        .get(url)
        .then((response) => {
          const movies = movieListDisplay.slice();
          for(let i = 0; i < 20; i++){
            movies.push(response.data.results[i])
          }
          console.log(active)
          setMovieListDisplay(movies)
        })
    }
  }

  useEffect(() => {
    setActive("Films Populaires");
    getMovies(popularMovies, "Films Populaires");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = document.body.scrollHeight;
      // if ((window.scrollY + window.innerHeight) >= bottom) {
      //   setPage(page + 1) 
      //   console.log(page)
      //   if (active === "Films Populaires"){
      //     getMovies(popularMovies, active);
      //   } else if (active === "Films à venir") {
      //     getMovies(upcomingMovies, active)
      //   } else if (active === "Films sortis avant 2000"){
      //     getMovies(oldMovies, active)
      //   }
      // }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <Header setMovieListDisplay={setMovieListDisplay} getMovies={getMovies} popularMovies={popularMovies} oldMovies={oldMovies} upcomingMovies={upcomingMovies} active={active} setActive={setActive} />
      <section className='movieSection'>
        {movieListDisplay.map(movie => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} posterImg={imgPath + movie.poster_path} posterAlt={imgPath + movie.backdrop_path} releaseDate={movie.release_date} rating={movie.vote_average} />
        ))}
      </section>
    </>
  )
}

export default App
