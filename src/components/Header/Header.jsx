import { useState } from 'react';

function Header({setMovieListDisplay, getMovies, popularMovies, oldMovies, upcomingMovies, active, setActive}) {
    
    function handleClick(movieList, activeButton) {
        getMovies(movieList, activeButton)
    }


    return (
        <nav className="nav">
            <button onClick={() => handleClick(popularMovies, "Films Populaires")} className={active === "Films Populaires" ? "nav__button nav__button--active" : "nav__button"}>Films Populaires</button>
            <button onClick={() => handleClick(oldMovies, "Films sortis avant 2000")} className={active === "Films sortis avant 2000" ? "nav__button nav__button--active" : "nav__button"}>Films sortis avant 2000</button>
            <button onClick={() => handleClick(upcomingMovies, "Films à venir")} className={active === "Films à venir" ? "nav__button nav__button--active" : "nav__button"}>Films à venir</button>
        </nav>
    )
}

export default Header;