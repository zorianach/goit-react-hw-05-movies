import { getMovieCast } from "api/api";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {CastCard, CastContainer,ImgPlaceholder, Info} from './Cast.styled';
import { AiOutlineUser } from 'react-icons/ai';


const Cast =()=> {
    const [moviesCast, setMoviesCast] = useState([]);
    const { movieId } = useParams();

    useEffect(()=>{
        getMovieCast(movieId).then(({cast})=> {
            // console.log(cast)
            setMoviesCast(cast);
            })
        }, [movieId])
    
        return (
            <>
        <CastContainer>
        {moviesCast.length > 0 ? (
        moviesCast.map(({ id, profile_path, character, name }) => (
          <CastCard key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
            ) : (
                <ImgPlaceholder>
              <AiOutlineUser size={200} />
              </ImgPlaceholder>
            )}
            <p>
                <span> Actor:</span> {name}
              </p>
              <p>
                <span>Character:</span> {character}
              </p>
          </CastCard>
        ))
      ) : (
        <Info> Sorry, there isn't any info</Info>
      )}
        </CastContainer>
        </>
         )
}

export default Cast;