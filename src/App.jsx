import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import useGeneralContext from "./contexts/GeneralContext.jsx";
import Header from "./components/Header/Header.jsx";
import MovieList from "./components/MovieList/MovieList.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MoviePage from "./components/MoviePage/MoviePage.jsx";
import "./index.css";
import "./App.css";

function App() {
  const { language, type } = useGeneralContext();
  const apiKey = import.meta.env.VITE_API_KEY;
  const minDate = getDate("now");
  const maxDate = getDate("");
  const minOldMovies = "1970-01-01";
  const maxOldMovies = "2000-01-01";
  const minOldSeries = "1980-01-01";
  const maxOldSeries = "2005-01-01";

  function getDate(time) {
    const today = new Date().toLocaleDateString();
    const dateElements = today.split("/");
    if (time === "now") {
      return dateElements[2] + "-" + dateElements[1] + "-" + dateElements[0];
    } else {
      return (
        parseInt(dateElements[2]) +
        1 +
        "-" +
        dateElements[1] +
        "-" +
        dateElements[0]
      );
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        {
          index: true,
          element: (
            <Navigate
              to={type === "movies" ? "movies/trending/1" : "series/trending/1"}
              replace
            />
          ),
        },
        {
          path: "movies/trending/:id",
          element: (
            <>
              <MovieList />
            </>
          ),
          loader: async ({ params }) => {
            const response = await fetch(
              `https://api.themoviedb.org/3/trending/movie/week?language=${language}&page=${params.id}&${apiKey}`
            );
            return await response.json();
          },
        },
        {
          path: "movies/top-rated/:id",
          element: (
            <>
              <MovieList />
            </>
          ),
          loader: async ({ params }) => {
            const response = await fetch(
              `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${language}&page=${params.id}&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=5000&${apiKey}`
            );
            return await response.json();
          },
        },
        {
          path: "movies/oldies/:id",
          element: (
            <>
              <MovieList />
            </>
          ),
          loader: async ({ params }) => {
            const response = await fetch(
              `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${language}&page=${params.id}&primary_release_date.gte=${minOldMovies}&primary_release_date.lte=${maxOldMovies}&sort_by=popularity.desc&vote_count.gte=1000&${apiKey}`
            );
            return await response.json();
          },
        },
        {
          path: "movies/upcoming/:id",
          element: (
            <>
              <MovieList />
            </>
          ),
          loader: async ({ params }) => {
            const response = await fetch(
              `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${language}&page=${params.id}&sort_by=popularity.desc&primary_release_date.gte=${minDate}&primary_release_date.lte=${maxDate}&${apiKey}`
            );
            return await response.json();
          },
        },
        {
          path: "/movie/:id",
          element: <MoviePage />,
        },
        {
          path: "series/trending/:id",
          element: (
            <>
              <MovieList />
            </>
          ),
          loader: async ({ params }) => {
            const response = await fetch(
              `https://api.themoviedb.org/3/trending/tv/week?language=${language}&page=${params.id}&${apiKey}`
            );
            return await response.json();
          },
        },
        {
          path: "series/top-rated/:id",
          element: (
            <>
              <MovieList />
            </>
          ),
          loader: async ({ params }) => {
            const response = await fetch(
              `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=${language}&page=${params.id}&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=5000&${apiKey}`
            );
            return await response.json();
          },
        },
        {
          path: "series/oldies/:id",
          element: (
            <>
              <MovieList />
            </>
          ),
          loader: async ({ params }) => {
            const response = await fetch(
              `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=${language}&page=${params.id}&first_air_date.gte=${minOldSeries}&first_air_date.lte=${maxOldSeries}&sort_by=popularity.desc&vote_count.gte=500&${apiKey}`
            );
            return await response.json();
          },
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
