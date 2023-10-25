
import axios from 'axios';
import Cast from '../Cast/Cast';
import { useState } from "react";


function MovieCard({ id, title, posterImg, posterAlt, releaseDate, rating }) {

    const apiKey = '&api_key=21e02b5068821db1ee7df050d103412c';

    const imdbPath = 'https://www.imdb.com/title/';
    const [cast, setCast] = useState("");
    const [imdbId, setImdbId] = useState("");
    const [imgSrc, setImgSrc] = useState(posterImg);
    const formattedReleaseDate = releaseFormat(releaseDate);


    function releaseFormat(releaseDate) {
        const dateElements = releaseDate.split('-');
        return dateElements[2] + "/" + dateElements[1] + "/" + dateElements[0];
    }

    function getIMDB(id) {
        if (imdbId === "") {
            axios
                .get(`https://api.themoviedb.org/3/movie/${id}?language=fr-FR${apiKey}`)
                .then((response) => {
                    console.log(response.data.imdb_id);
                    setImdbId(response.data.imdb_id);
                })
        }
    }

    function handleclick() {
        window.open(imdbPath + imdbId);  
    }

    function getCast(id) {
        // Requête pour obtenir l'id IMDB
        if (cast !== "") {
            setCast("");
        }

        axios
            .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=21e02b5068821db1ee7df050d103412c&language=fr-FR`)
            .then((response) => {
                const cast = [];
                for (let i = 0; i < 5 || i < response.data.cast[i].length; i++) {
                    cast.push(response.data.cast[i].name);             
                }
                setCast(cast.join(", "));
            })


        // else {
        //     const url = `https://moviesdatabase.p.rapidapi.com/titles/${imdbId}/`;
        //     const options = {
        //         method: 'GET',
        //         headers: {
        //             'X-RapidAPI-Key': '71f1b31559msh47ee2c84c5a7845p1c3708jsn8df9010fa9f5',
        //             'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        //         }
        //     };
    
        //     fetch(url, options)
        //     .then(response => response.json())
        //         .then(response => {
        //             setCast((((response.results).primaryImage).caption).plainText);
        //         })
        //         .catch(err => console.error(err));
        // }
        
    }

    function getColorRating(rating) {
        if (rating >= 7.5) {
            return '--good';
        } else if (rating >= 6) {
            return '--average'
        } else {
            return '--bad';
        }
    }

    function switchPoster() {
        imgSrc === posterImg ? setImgSrc(posterAlt) : setImgSrc(posterImg);
    }


    return (
        <article className="card" >
            <img onClick={() => switchPoster()} className="card__img" src={imgSrc} alt="" />
            <div className={'card__rating card__rating' + getColorRating(rating)}>{rating}</div>
            <h3 className="card__title">{title}</h3>
            <p>Sortie : {formattedReleaseDate}</p>
            <button className='card__button' onMouseEnter={() => getIMDB(id)} onClick={() => handleclick()} >Voir sur IMDB</button>
            <button className='card__button' onClick={() => getCast(id)} >Main actors</button>
            <Cast cast={cast} />
        </article>
    )

}

export default MovieCard;