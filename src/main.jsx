import { ContextProvider } from "./contexts/LanguageContext.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// const [page, setPage] = useState(1);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Header />
//         <Outlet />
//       </>
//     ),
//     children: [
//       { index: true, element: <Navigate to="populaires" replace /> },
//       {
//         path: "populaires",
//         element: (
//           <>
//             <MovieList key="populaires" list="populaires" />
//           </>
//         ),
//       },
//       {
//         path: "old",
//         element: (
//           <>
//             <MovieList key="old" list="old" />
//           </>
//         ),
//       },
//       {
//         path: "upcoming",
//         element: (
//           <>
//             <MovieList key="upcoming" list="upcoming" />
//           </>
//         ),
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>
);
