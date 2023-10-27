import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/Header/Header.jsx";
import "./index.css";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import MovieList from "./components/MovieList/MovieList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <Navigate to="populaires" replace /> },
      {
        path: "populaires",
        element: (
          <>
            <MovieList key="populaires" list="populaires" />
          </>
        ),
      },
      {
        path: "old",
        element: (
          <>
            <MovieList key="old" list="old" />
          </>
        ),
      },
      {
        path: "upcoming",
        element: (
          <>
            <MovieList key="upcoming" list="upcoming" />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
