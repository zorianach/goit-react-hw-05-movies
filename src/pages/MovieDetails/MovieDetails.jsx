import { getMovieDetails } from "api/api";
import { useEffect, useState,  } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { FilmLayout, Img, InfoContainer, Title, SubTitle, FilmDesc, StyledList, ListItem, AddTitle} from "./MovieDetails.styled";
import ButtonBack from "components/ButtonBack/ButtonBack";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const location = useLocation();
    const buttonBack = location.state?.from ?? `/`;


useEffect(() => {
    getMovieDetails(movieId)
    .then(movieInfo => setMovieDetails(movieInfo))
    .catch(error => console.error(error));
}, [movieId])


const {title, vote_average, overview, genres, poster_path} = movieDetails;
return(
    // console.log(movieDetails)
    <>
      <ButtonBack to={buttonBack} />
    <FilmLayout>
        <Img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
        />
        <InfoContainer>
            <Title>{title}</Title>
            <SubTitle>User score: {vote_average && Math.floor(vote_average * 10)}%</SubTitle>
            <SubTitle>Overview</SubTitle>
            <FilmDesc>{overview}</FilmDesc>
            <SubTitle>Genres</SubTitle>
            <FilmDesc>
                 {genres && <p>{genres.map(({ name }) => name).join(', ')}</p>}
            </FilmDesc>
        </InfoContainer>
    </FilmLayout>
    <InfoContainer>
        <AddTitle>Additional Information</AddTitle>
        <StyledList>
          <ListItem>
            <NavLink to="cast" state={location.state}>
              Cast
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="reviews" state={location.state}>
              Reviews
            </NavLink>
          </ListItem>
        </StyledList>
     </InfoContainer>
     {/* <GlobalStyles /> */}
    <Outlet/>
    </>
)
}

export default MovieDetails;