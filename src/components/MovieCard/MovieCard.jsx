import axios from "axios";
import Cast from "../Cast/Cast";
import { useState } from "react";
import PropTypes from "prop-types";

function MovieCard({ id, title, posterImg, posterAlt, releaseDate, rating }) {
  const apiKey = "&api_key=21e02b5068821db1ee7df050d103412c";

  const imdbPath = "https://www.imdb.com/title/";
  const imgPath = "https://image.tmdb.org/t/p/original";
  const notFound = "../src/assets/notFound.jpg";
  const [cast, setCast] = useState("");
  const [imdbId, setImdbId] = useState("");
  const [imgSrc, setImgSrc] = useState(
    posterImg ? imgPath + posterImg : posterAlt ? imgPath + posterAlt : notFound
  );
  const formattedReleaseDate = releaseFormat(releaseDate);

  function releaseFormat(releaseDate) {
    const dateElements = releaseDate.split("-");
    return dateElements[2] + "/" + dateElements[1] + "/" + dateElements[0];
  }

  async function getIMDB(id) {
    if (imdbId === "") {
      axios
        .get(`https://api.themoviedb.org/3/movie/${id}?language=fr-FR${apiKey}`)
        .then((response) => {
          setImdbId(response.data.imdb_id);
        });
    }
  }

  function handleclick() {
    window.open(imdbPath + imdbId);
  }

  function getCast(id) {
    if (cast !== "") {
      setCast("");
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=21e02b5068821db1ee7df050d103412c&language=fr-FR`
        )
        .then((response) => {
          const cast = [];
          for (let i = 0; i < 5 || i < response.data.cast[i].length; i++) {
            cast.push(response.data.cast[i].name);
          }
          setCast(cast.join(", "));
        });
    }
  }

  function getColorRating(rating) {
    if (rating >= 7.5) {
      return "--good";
    } else if (rating >= 6) {
      return "--average";
    } else {
      return "--bad";
    }
  }

  function switchPoster() {
    if (posterImg && posterAlt) {
      imgSrc === imgPath + posterImg
        ? setImgSrc(imgPath + posterAlt)
        : setImgSrc(imgPath + posterImg);
    }
  }

  function getPercent(num) {
    const percent = num.toFixed(1) * 10;
    return percent;
  }

  return (
    <article
      className={
        imgSrc === imgPath + posterImg
          ? "card"
          : imgSrc === notFound
          ? "card"
          : "card--large"
      }
    >
      <img
        onClick={() => switchPoster()}
        className="card__img"
        src={imgSrc ? imgSrc : posterAlt ? imgPath + posterAlt : notFound}
        alt={title}
        loading="eager"
      />
      <div
        className={
          rating > 0
            ? "card__rating card__rating" + getColorRating(rating)
            : "card__rating--invisible"
        }
      >
        <p>{getPercent(rating)}</p>
      </div>
      <h3 className="card__title">{title}</h3>
      <p>Sortie : {formattedReleaseDate}</p>
      <button
        className="card__button"
        onMouseEnter={() => getIMDB(id)}
        onClick={() => handleclick()}
      >
        Voir sur IMDB
      </button>
      <button
        className={
          cast !== "" ? "card__button card__button--active" : "card__button"
        }
        onClick={() => getCast(id)}
      >
        Main actors
      </button>
      <Cast cast={cast} />
    </article>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterImg: PropTypes.string,
  posterAlt: PropTypes.string,
  releaseDate: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
