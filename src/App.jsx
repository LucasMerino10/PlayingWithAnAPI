import Header from "./components/Header/Header.jsx";
import "./index.css";
import "./App.css";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import MovieList from "./components/MovieList/MovieList.jsx";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  const minDate = getDate("now");
  const maxDate = getDate("");

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
              <MovieList
                key="populaires"
                list="populaires"
                page={page}
                setPage={setPage}
                minDate={minDate}
                maxDate={maxDate}
              />
            </>
          ),
        },
        {
          path: "oldies/:id",
          element: (
            <>
              <Header setPage={setPage} />
              <MovieList
                key="oldies"
                list="oldies"
                page={page}
                setPage={setPage}
                minDate={minDate}
                maxDate={maxDate}
              />
            </>
          ),
        },
        {
          path: "upcoming/:id",
          element: (
            <>
              <Header setPage={setPage} />
              <MovieList
                key="upcoming"
                list="upcoming"
                page={page}
                setPage={setPage}
                minDate={minDate}
                maxDate={maxDate}
              />
            </>
          ),
        },
      ],
    },
  ]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const bottom = document.body.scrollHeight;
  //     if (window.scrollY + window.innerHeight >= bottom) {
  //       console.log(page);
  //       if (active === "Films Populaires") {
  //         getMovies(popularMovies, active);
  //       } else if (active === "Films à venir") {
  //         getMovies(upcomingMovies, active);
  //       } else if (active === "Films sortis avant 2000") {
  //         getMovies(oldiesMovies, active);
  //       }
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return <RouterProvider router={router} />;
}

export default App;
