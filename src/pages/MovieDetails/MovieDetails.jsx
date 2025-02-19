import {  NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { ShowMovieDetails } from "../../services/api";
import { useEffect, useRef, useState } from "react";
import s from "./MovieDetails.module.css"


const MovieDetails = () => {
  const {movieId} = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackUrl = useRef(location?.state ?? '/movies')

  useEffect(() => {
    const getMovie = async () => {
      const data = await ShowMovieDetails(movieId)
      setMovie(data)
    }
    getMovie()
  }, [movieId])
  
  if (!movie) {
  return <div>
    <h1>Loading...</h1>
  </div>;
}
  return (
    <div className={s.detailsWrapper}>
      <NavLink to={goBackUrl.current} className={s.back}>Go back</NavLink>
      <div className={s.movieInfo}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster" className={s.img} />
        <div className={s.info}>
          <h2>{ movie.original_title }</h2>
          <p>User Score: {movie.vote_average.toFixed(1)} </p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map((genre) => genre.name).join(', ')}</p>
        </div>
      </div>
      <p className={s.linkTitle}>Additional information:</p>
      <ul className={s.linkWrapper}>
        <NavLink to="cast" className={s.link} >Cast</NavLink>
        <NavLink to="reviews" className={s.link} >Reviews</NavLink>
      </ul>
      <div className={s.Outlet} >
        <Outlet />
      </div>
    </div>
  )
}

export default MovieDetails