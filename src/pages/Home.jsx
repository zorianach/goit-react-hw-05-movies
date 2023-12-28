import { getMovies } from "api/api";
import Loader from "components/Loader/Loader";
import Movies from "components/Movies/Movies";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// import { useSubmit } from "react-router-dom";


const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        getMovies().then(setMovies)
        .catch(error => setError(error))
        .finally(() => setLoading(false));
      }, []);
// console.log(movies)
    return (
        <>
        {error && <h2>{error.message}</h2>}
        <h1>Trending today</h1>
        <Movies movies={movies}>
            <Outlet/>
        </Movies>
        {loading && <Loader />}
        </>
    )
}

export default Home;