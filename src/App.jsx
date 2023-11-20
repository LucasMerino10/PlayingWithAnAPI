import { useState } from "react";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import useLanguageContext from "./contexts/LanguageContext.jsx";
import Header from "./components/Header/Header.jsx";
import MovieList from "./components/MovieList/MovieList.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MoviePage from "./components/MoviePage/MoviePage.jsx";
import "./index.css";
import "./App.css";

function App() {
  const { language } = useLanguageContext();
  const apiKey = import.meta.env.VITE_API_KEY;
  const [page, setPage] = useState(1);
  const minDate = getDate("now");
  const maxDate = getDate("");
  const minOld = "1970-01-01";
  const maxOld = "2000-01-01";

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
          <Outlet />
        </>
      ),
      children: [
        { index: true, element: <Navigate to="populaires/1" replace /> },
        {
          path: "populaires/:id",
          element: (
            <>
              <Header setPage={setPage} />
              <MovieList key="populaires" page={page} setPage={setPage} />
              <Footer />
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
          path: "oldies/:id",
          element: (
            <>
              <Header setPage={setPage} />
              <MovieList key="oldies" page={page} setPage={setPage} />
              <Footer />
            </>
          ),
          loader: async ({ params }) => {
            const response = await fetch(
              `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${language}&page=${params.id}&primary_release_date.gte=${minOld}&primary_release_date.lte=${maxOld}&sort_by=popularity.desc&vote_count.gte=1000&${apiKey}`
            );
            return await response.json();
          },
        },
        {
          path: "upcoming/:id",
          element: (
            <>
              <Header setPage={setPage} />
              <MovieList key="upcoming" page={page} setPage={setPage} />
              <Footer />
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
