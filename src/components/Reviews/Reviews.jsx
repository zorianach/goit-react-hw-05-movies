import { getMovieReviews } from "api/api";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { ReviewsCard, ReviewsDescr, ReviewsList } from "./Reviews.styled";



const Reviews =()=> {
    const [movieReviews, setMovieReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(()=>{
        getMovieReviews(movieId).then(({results})=> {
            console.log(results)
            setMovieReviews(results);
            })
        }, [movieId])
     
    return (
        <>

      {movieReviews.length > 0 ? (
        <ReviewsList>
        {movieReviews.map(({ id, author, content }) => (
         
            <ReviewsCard key={id}>
            <p>
              <span>Author:</span> {author}
            </p>
            <ReviewsDescr>{content}</ReviewsDescr>
          </ReviewsCard>
        ))}
        </ReviewsList>
      ) : (
        <p>Sorry, we don`t have any review for this movie 🤷🏼‍♂️</p>
      )}
        </>
    )
}

export default Reviews;