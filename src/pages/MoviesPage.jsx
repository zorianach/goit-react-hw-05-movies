import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import Movies from '../components/Movies/Movies';
import Title from '../components/Title/Title';
import Loader from '../components/Loader/Loader';
import { getSearchMovies } from 'api/api';
import SearchBar from 'components/Searchbar-hdks/SearchBar';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const moviesTitle = searchParams.get('query') ?? '';

  const handleOnSubmit = query => {
    const changeParams = query !== '' ? { query } : {};
    setSearchParams(changeParams);
  };

  useEffect(() => {
    if (!moviesTitle) return;

    setLoading(true);
    getSearchMovies(moviesTitle)
      .then((movieByQuery ) => {
        console.log(movieByQuery);
        setMovies(movieByQuery);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [moviesTitle]);

//   console.log(movies)
  return (
    <>
       <Title title="Search for your movie" />
      {error && <h2>{error.message}</h2>}
      <SearchBar value={moviesTitle} onSearch={handleOnSubmit} />
      {movies.length > 0 && <Movies movies={movies}>
         <Outlet/>
    </Movies>}
      {loading && <Loader />}
    </>
  );
};

export default MoviesPage;
