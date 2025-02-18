import { useParams } from "react-router-dom";
import { ShowMovieDetails } from "../../services/api";
import { useEffect, useState } from "react";
import s from "./MovieDetails.module.css"


const MovieDetails = () => {
  const {movieId} = useParams();
  
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const data = await ShowMovieDetails(movieId)
      setMovie(data)
    }
    getMovie()
  }, [movieId])

  console.log(movie);
  
  if (!movie) {
  return <div>
    <h1>Loading...</h1>
  </div>;
}
  return (
    <div className={s.movieInfo}> 
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster" className={s.img} />
      <div className={s.info}>
        <h2>{ movie.original_title }</h2>
        <p>User Score: </p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genres.map((genre) => genre.name).join(', ')}</p>
      </div>
    </div>
  )
}

export default MovieDetails