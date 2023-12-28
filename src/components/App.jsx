import Layout from "layout/Layout";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "pages/Home";
// import Movies from "pages/MoviesPage";
// import MovieDetails from "pages/MovieDetails/MovieDetails";
// import Reviews from "./Reviews/Reviews";
// import Cast from "./Cast/Cast";

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/MoviesPage'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));


export const App = () => {

  return (
    <>
    <Suspense fallback={<>loading...</>}>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="movies" element={<Movies/>}/>
          <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>/
          <Route path="*" element={<Home/>}/>
        </Route>
        </Routes>
      </Suspense>
    </>
  );
};
