import Layout from "layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Movies from "pages/MoviesPage";
import MovieDetails from "pages/MovieDetails.jsx/MovieDetails";
import Reviews from "./Reviews/Reviews";
import Cast from "./Cast/Cast";

export const App = () => {

  return (
    <>
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
    </>
  );
};
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>