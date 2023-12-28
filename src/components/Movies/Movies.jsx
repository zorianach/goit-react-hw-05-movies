import { Link, useLocation } from "react-router-dom";
import { AiOutlineFileImage } from 'react-icons/ai';
import { MoviesLayout, MovieItem, Card, Img } from "./Movies.styled";


const Movies =({movies})=> {
    const location = useLocation();
// console.log(movies)
    return (
        <>
        <MoviesLayout>
        {movies.map(({id, original_title, poster_path}) => (
            // console.log(movie)
            <MovieItem key={id}>
                <Link state={{ from: location }} to={`/movies/${id}`}>
                <Card>
                  {poster_path ? (
                    <Img
                      src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                      alt={original_title}
                    />
                  ) : (
                    <AiOutlineFileImage size={200} />
                  )}
                  {original_title}
                </Card>
                </Link>
            </MovieItem>
        ))}
        </MoviesLayout>
        </>
    )
}

export default Movies;